import Task from "../models/Task.js";

// ==============================
// CREATE TASK
// ==============================
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      user: req.user.userId,
      title,
      description: description || "",
      status: status || "pending",
    });

    res.status(201).json(task);
  } catch (err) {
    console.error("Create Task Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ==============================
// GET ALL TASKS FOR LOGGED-IN USER
// ==============================
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (err) {
    console.error("Get Tasks Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ==============================
// UPDATE TASK
// ==============================
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update Task Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ==============================
// DELETE TASK
// ==============================
export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Delete Task Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
