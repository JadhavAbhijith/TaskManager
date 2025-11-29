import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

dotenv.config();

const createDefaultAdmin = async () => {
  try {
    const existing = await User.findOne({ email: "admin@gmail.com" });
    if (existing) {
      console.log("Default admin account already exists.");
      return;
    }

    const hashed = await bcrypt.hash("admin@45", 10);
    const admin = await User.create({
      name: "admin",
      email: "admin@gmail.com",
      password: hashed,
      role: "admin",
    });

    console.log("Default admin user created:", admin.email);
  } catch (err) {
    console.error("Error creating default admin:", err.message);
  }
};

const connectDB = async () => {
  try {
    console.log("DB.JS MONGO_URI =", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      // options if you want
    });
    console.log("MongoDB Connected Successfully");

    // create default admin if not present
    await createDefaultAdmin();
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
