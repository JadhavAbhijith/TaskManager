import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../../controllers/task.controller.js";

import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

// CREATE TASK
router.post("/", protect, createTask);

// GET ALL TASKS FOR LOGGED IN USER
router.get("/", protect, getTasks);

// UPDATE TASK
router.put("/:id", protect, updateTask);

// DELETE TASK
router.delete("/:id", protect, deleteTask);

export default router;
