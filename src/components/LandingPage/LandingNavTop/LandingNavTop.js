import React from "react";
import NavBars from "../../NavBars/NavBars";
import { Link } from "react-router-dom";

const LandingNavTop = ({ title, route }) => {
  return (
    <div className="landing-nav-top d-flex flex-column justify-content-between">
      <NavBars />
      <div className="text-white landing-nav-top-title container mb-5 pb-5 d-flex align-items-center">
        <h1 className="pr-5">
          <b>{title}</b>
        </h1>
        <p className="pl-5">
          <b>
            {" "}
            <Link to="/">
              <span className="text-highlight">Home</span>
            </Link>
            /{route}
          </b>
        </p>
      </div>
    </div>
  );
};

export default LandingNavTop;
