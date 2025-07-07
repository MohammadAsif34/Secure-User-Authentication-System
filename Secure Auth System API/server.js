import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import Authentication from "./routes/Authentication.route.js";
import GetUser from "./routes/User.route.js";
import UpdateUser from "./routes/Update.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(`Error DB connection :: ${err.message}`));

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(`Error :: ${err.message}`);
  }
});

app.get("/", (req, res) => {
  try {
    res.send("Welcome to Secure User Authentication");
    console.log("Welcome to Secure User Authentication");
  } catch (err) {
    console.log(`Error :: ${err.message}`);
  }
});

app.use("/api/v1/auth", Authentication);
app.use("/api/v1/user", GetUser);
app.use("/api/v1/update", UpdateUser);
