import React from "react";
import "../css/CardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faArrowsAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const CardComponent = () => {
  return (
    <div className="card-component">
      <span className="card-image"></span>
      <span className="city-day-info">
        <small className="city">Karachi</small>
        <small className="days">3 days ago</small>
      </span>
      <h5 className="desc">House for Sale in DHA</h5>
      <h4 className="rupees">Rs : 10.50 Cr</h4>

      <small className="all-icons">
        <FontAwesomeIcon icon={faBed} className="icon-bed" />
        <span className="three-bed">3 bed</span>
        <FontAwesomeIcon icon={faBath} className="icon-bath" />
        <span className="three-bath">2 bath</span>
        <FontAwesomeIcon icon={faArrowsAlt} className="icon-sq-yard" />
        <span className="three-sq-yard">600 sp yd</span>
      </small>

      <small className="info-icon-cont">
        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
      </small>
      <button className="card-btn">See the offer</button>
    </div>
  );
};

export default CardComponent;
