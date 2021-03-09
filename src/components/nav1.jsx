import React from "react";
import "../css/Nav.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {
  return (
    <div className="nav1">
      <FontAwesomeIcon icon={faAlignCenter} className="icon" />
      <img src={logo} alt="logo" width="100px" className="logo-image"/>
    </div>
  );
};

export default Nav1;
