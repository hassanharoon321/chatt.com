import React from "react";
import "../css/Home.css";
import Navbar from "./navbar";
import ComponentTwo from './ComponentTwo'
import logo from "../images/cover3-01.jpg";

function Background() {
  return (
    <div className="container">
      <img className="backImage" src={logo} alt="Logo" />
      <Navbar />
      <ComponentTwo />
    </div>
  );
}

export default Background;
