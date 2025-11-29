import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    console.log("Authorization header:", header);

    if (!header || !header.startsWith("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];
    console.log("Token received:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.userId);
    console.log("User fetched from DB:", user);

    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = {
      userId: user._id,
      role: user.role,
    };

    next();
  } catch (err) {
    console.error("Protect middleware error:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
};
