import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import ForgetPassword from "../page/ForgetPassword";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
};

export default PublicRoute;
