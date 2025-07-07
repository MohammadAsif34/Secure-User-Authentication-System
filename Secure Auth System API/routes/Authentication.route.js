import express from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "../middlewarers/Authentication.middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/protected", verifyToken, async (req, res) => {
  res.json({ status: 200, msg: "Access granted", user: req.user });
});

export default router;
