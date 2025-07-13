import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import express from "express";
import mongoose from "mongoose";
import mainRoutes from "./server/routes/main.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json()); // to handle JSON requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/api", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
