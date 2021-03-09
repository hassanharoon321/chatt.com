import React from "react";
import "../css/ComponentSearchThree.css";
import Store from './Store';

function ComponentThree() {
  return (
    <div className="second-search">
      <p className="para-three">Explore Our Categories</p>
      <p className="view-more">View More</p>
      <span className="all-btn">
        <button className="btn-one">All</button>
        <button>Retailers</button>
        <button>Properties</button>
        <button>Labour</button>
        <button>Home Services</button>
        <button>Constructional Material</button>
        <button>Safety</button>
      </span>
      <Store/>
    </div>
  );
}

export default ComponentThree;
