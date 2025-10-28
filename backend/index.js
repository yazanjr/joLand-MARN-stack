import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ Enable CORS
import path from "path";
import { fileURLToPath } from "url";

import { PORT, MONGODB_URL } from "./config.js";
import landRoutes from "./routes/landRoutes.js";

const app = express();

// ✅ Fix for ES modules (to use __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Enable CORS (allow React frontend)
app.use(cors());

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploaded images folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Basic test route
app.get("/", (req, res) => {
  res.status(200).send("Hello from backend");
});

// ✅ Land routes
app.use("/api/lands", landRoutes);

// ✅ Connect to MongoDB and start server
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
