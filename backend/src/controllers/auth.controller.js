import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Task from "../models/Task.js";

// register
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already in use" });

    const hashed = await bcrypt.hash(password, 10);

    const created = await User.create({
      name,
      email,
      password: hashed,
      role: role || "user",
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

// login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

// Admin: get all users + all tasks
export const getAllUsersAndTasks = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    const tasks = await Task.find().populate("user", "name email role");
    res.json({ users, tasks });
  } catch (err) {
    next(err);
  }
};

// Admin: delete user (and optionally delete their tasks)
export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // prevent deleting self? optional: if req.user.userId === userId prevent
    if (req.user.userId === userId) {
      return res.status(400).json({ message: "Admin cannot delete self" });
    }

    const deleted = await User.findByIdAndDelete(userId);
    if (!deleted) return res.status(404).json({ message: "User not found" });

    // optionally remove their tasks
    await Task.deleteMany({ user: userId });

    res.json({ message: "User and tasks deleted" });
  } catch (err) {
    next(err);
  }
};

// Admin: change role
export const updateUserRole = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const updated = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User role updated", user: updated });
  } catch (err) {
    next(err);
  }
};
