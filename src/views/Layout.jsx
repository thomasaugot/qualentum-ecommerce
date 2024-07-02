import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
