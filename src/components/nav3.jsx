import React from "react";
import "../css/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Nav3 = () => {
  return (
    <div className="nav3">
      <p className="sign-in">Sign in</p>
      <FontAwesomeIcon icon={faUserCircle} className="icon" className="sign-in-icon"/>
    </div>
  );
};

export default Nav3;
