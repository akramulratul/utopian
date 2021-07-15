import React from "react";
import NavBars from "../NavBars/NavBars";
import homeImage from "../../image/LandingPage/jumbo-right.svg";
import { Link } from "react-router-dom";
const LandingTop = () => {
  return (
    <div className="landing-top-container ">
      <NavBars />
      <div className="page-container d-flex align-items-center align-items-center">
        <div className="row m-0 p-0">
          <div className="col-lg-5 text-left d-flex align-items-center">
            <div className="text-white p-lg-5">
              <h1>
                {" "}
                <b> Complicated life turns into a simpler profit here.</b>
              </h1>
              <p className="text-white py-4">
                Join us for innovative profit already millions are trade and
                earn a smartest income. You can too.
              </p>
              <Link to="/login">
                <button className="btn btn-lg brand-btn">Invest Now</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="w-100" src={homeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTop;
