import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full h-full ">
      <Navbar></Navbar>
      <div className="">{children}</div>
      <footer></footer>
    </section>
  );
};

export default MainLayout;
