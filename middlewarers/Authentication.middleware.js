import User from "../models/Users.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { fname, username, email, password, dob, lname, phone } = req.body;
    if (!fname || !email || !username || !dob || !password) {
      return res.json({
        status: 400,
        code: "MISSING_FIELDS",
        msg: "Username and password are required",
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.json({
        status: 400,
        code: "USER_ALREADY_EXISTS",
        msg: "User already registered. Try logging in instead.",
      });
    }
    const uniqueUsername = await User.findOne({ username });
    if (uniqueUsername) {
      return res.json({
        status: 400,
        code: "USERNAME_ALREADY_EXISTS",
        msg: "Username already registered, try another unique username.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 8);

    const newUser = await User({
      fname,
      lname,
      email,
      dob,
      username,
      password: hashPassword,
      phone,
    });
    await newUser.save();

    res.json({
      status: 200,
      code: "REGISTERED_SUCCESSFULLY",
      msg: "Registered successfully",
    });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

// login middleware
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({
        status: 400,
        msg: "Username and password are required",
      });
    }

    const user = await User.findOne({ username }).select("password");
    if (!user) {
      console.log(username, password);
      return res.json({
        status: 401,
        msg: "Invalid username or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({
        status: 401,
        msg: "Invalid username or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true in production
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      status: 200,
      msg: "Login successful",
    });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

//Authorize user
export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: 401, msg: "cookie not found! access denied" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
    console.log("verified");
  } catch (err) {
    res.json({
      status: 403,
      msg: "invalid and expried token",
      error: err.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      path: "/",
    });
    res.json({
      status: 200,
      code: "LOGOUT_SUCCESSFULLY",
      msg: "Logout successfully",
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "invalid and expried token",
      error: err.message,
    });
  }
};
