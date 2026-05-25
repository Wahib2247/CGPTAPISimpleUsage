import "dotenv/config.js";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// TODO #7 — Mount the chatRoutes on the path "/api/chat"
// Hint: app.use(...)
app.use("/api/chat", chatRoutes);
// Health check route — already done, do not touch
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Global error handler — must be LAST, already placed correctly
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
