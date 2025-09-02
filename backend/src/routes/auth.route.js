import express from "express";

import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// @route POST /api/auth/signup
// @desc Signup user
// @access Public
router.post("/signup", signup);

// @route POST /api/auth/login
// @desc Authenticate user
// @access Public
router.post("/login", login);

// @route POST /api/auth/logout
// @desc Logout user
// @access Public
router.post("/logout", logout);

// @route PUT /api/auth/update-profile
// @desc Update profile user
// @access Private
router.put("/update-profile", protectRoute, updateProfile);

// @route GET /api/check
// @descVerify if user is authenticated
// @access Private
router.get("/check", protectRoute, checkAuth);

export default router;