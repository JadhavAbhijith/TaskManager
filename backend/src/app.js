console.log("APP.JS LOADED");

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import authRoutes from "./routes/v1/auth.routes.js";
import taskRoutes from "./routes/v1/task.routes.js";

import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Connect to database
connectDB();

// Security middlewares
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// JSON parser
app.use(express.json());

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Global Error Handler (ALWAYS LAST)
app.use(errorHandler);

export default app;
