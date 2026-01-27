import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import CategoryNews from "../pages/CategoryNews";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <section className="w-7xl mx-auto">
        <LatestNews />
      </section>
      <nav className="w-7xl mx-auto">
        <Navbar />
      </nav>
      <section className="w-7xl mx-auto grid md:grid-cols-12 gap-3">
        <aside className="col-span-3 ">
          <LeftNavbar />
        </aside>
        <section className="col-span-6 ">
          <Outlet />
        </section>
        <aside className="col-span-3 ">
          <RightNavbar />
        </aside>
      </section>
    </div>
  );
};

export default Layout;
