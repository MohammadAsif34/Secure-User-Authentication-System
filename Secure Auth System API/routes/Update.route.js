import express from "express";
import { verifyToken } from "../middlewarers/Authentication.middleware.js";
import { updateUser } from "../middlewarers/Update.middleware.js";

const router = express.Router();

router.put("/user/:id", verifyToken, updateUser);

export default router;
