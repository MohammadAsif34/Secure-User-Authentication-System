import express from "express";
import { verifyToken } from "../middlewarers/Authentication.middleware.js";
import User from "../models/Users.model.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = req.user;
    const newuser = await User.findById(user.userId).select("-password");

    if (!user) {
      return res.json({ status: 401, msg: "Invalid username or password" });
    }

    res.json({ status: 200, msg: "Get Access", info: newuser });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
});

export default router;
