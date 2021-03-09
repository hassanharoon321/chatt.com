import React from "react";
import "../css/Nav.css";
import Nav1 from "./nav1"
import Nav2 from "./nav2"
import Nav3 from "./nav3"

const Navbar = () => {
  return (
    <div className="nav">
        <Nav1/>
        <Nav2/>
        <Nav3/>
    </div>
  );
};

export default Navbar;
