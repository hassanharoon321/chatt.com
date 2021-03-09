import React from "react";
import "../css/ComponentSearchThree.css";
import play from "../images/playstore-01.jpg";

function Store() {
  return (
    <div>
      <p className="compare">Search Compare and get</p>
      <img src={play} className="store-img" width="100px"/>
    </div>
  );
}

export default Store;
