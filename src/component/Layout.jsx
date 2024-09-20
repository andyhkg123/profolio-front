import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the nested route content */}
      <Footer />
    </div>
  );
};

export default Layout;
