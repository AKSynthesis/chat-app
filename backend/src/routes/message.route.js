import express from "express";

import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// @route GET /api/users
// @desc Get users
// @access Private
router.get("/users", protectRoute, getUsersForSidebar);

// @route GET /api/messages
// @desc Get messages between users
// @access Private
router.get("/:id", protectRoute, getMessages);

// @route POST /api/messages
// @desc Send messages to a user
// @access Private
router.post("/send/:id", protectRoute, sendMessage);

export default router;