import "./style.scss";
// import img_car from "./img_car.png";
import React from "react";
import Valorant from "./valorant22.jpg";
// import Button from "../Button";

function Hero() {
  return (
    <div>
      <div className="page-1">
        <div className="contener">
          <div className="content">
            <h1>THE ACTION STARTS NOW!</h1>
            <p>
            Head over to ValorantEsports.com to watch.
            </p>
            <button>WATCH NOW</button>
          </div>
          <div className="image">
            <img src={Valorant} alt="valorant" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
