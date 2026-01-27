import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] h-screen">
     <header className="w-7xl mx-auto">
       <Navbar />
     </header>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
