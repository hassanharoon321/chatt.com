import React from "react";
import "../css/ComponentTwo.css";
import ComponentThree from "./componentThree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ComponentTwo() {
  return (
    <div className="comp-two">
      <h1 className="text-one">Find your needs without any difficulties</h1>
      <p className="text-two">
        Find the best Properties and Construction material
      </p>

      <span className="search-input">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <input
          type="text"
          placeholder="Search what you want"
          className="s-input"
        />
        <select className="select-input">
          <option value="Location">Location</option>
          <option value="Address">Address</option>
          <option value="City">City</option>
          <option value="Country">Country</option>
        </select>
        <button className="search-btn">Search</button>
      </span>
      <ComponentThree/>
    </div>
  );
}

export default ComponentTwo;

{
}
