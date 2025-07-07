import React from "react";
import MainLayout from "../layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Profile from "../page/Profile";
import EditUser from "../page/EditUser";
import Home from "../page/Home";

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
    </MainLayout>
  );
};

export default PrivateRoute;
