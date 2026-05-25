import express from "express";
import { sendMessage } from "../controllers/chatController.js";

const router = express.Router();

// TODO #6 — Register the route
// Create a POST route at path "/" that uses the sendMessage controller
// Hint: router.post(...)
router.post("/", sendMessage);
// Export the router
export default router;
