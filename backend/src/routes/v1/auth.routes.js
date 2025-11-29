import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsersAndTasks,
  deleteUser,
  updateUserRole,
} from "../../controllers/auth.controller.js";
import { registerValidation, loginValidation } from "../../validations/auth.validation.js";
import { protect } from "../../middleware/authMiddleware.js";
import { validate } from "../../middleware/validate.js";
import { adminOnly } from "../../middleware/role.js";

const router = express.Router();

router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginValidation, validate, loginUser);

// admin-only dashboard
router.get("/admin/dashboard", protect, adminOnly, getAllUsersAndTasks);

// admin delete user
router.delete("/admin/user/:id", protect, adminOnly, deleteUser);

// admin update role
router.put("/admin/user/:id/role", protect, adminOnly, updateUserRole);

export default router;
