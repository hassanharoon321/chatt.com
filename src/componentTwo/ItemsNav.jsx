import React from "react";
import "../css/ItemsNav.css";

const ItemsNav = () => {
  return (
    <div className="nav-2">
      <span className="nav-text">
        <h1>Best Properties for you</h1>
      </span>
      <span className="nav-btns">
        <button className="nav-btns-one">All</button>
        <button>Residential</button>
        <button>Commercial</button>
        <button>Industrial</button>
        <button className="nav-btns-last">View All</button>
      </span>
    </div>
  );
};

export default ItemsNav;
