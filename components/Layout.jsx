import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
