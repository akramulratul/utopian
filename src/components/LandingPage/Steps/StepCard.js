import React from "react";
import registration from "../../../image/Steps/registration.svg";
import invest from "../../../image/Steps/invest.svg";
import work from "../../../image/Steps/work.svg";
import profit from "../../../image/Steps/profit.svg";

const StepCard = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="card-holder col-lg-3">
        <div className="icon-holder">
          <img src={registration} alt="" />
        </div>
        <div className="card-text-container d-flex justify-content-center align-items-center">
          <div>
            <h5>
              <b>Quick Registration</b>
            </h5>
            <small>Give your information and submit. Registration Done.</small>
          </div>
        </div>
      </div>

      <div className="card-holder col-lg-3">
        <div className="icon-holder">
          <img src={invest} alt="" />
        </div>
        <div className="card-text-container d-flex justify-content-center align-items-center bg-main-blue">
          <div>
            <h5>
              <b>Make An Investment</b>
            </h5>
            <small>Minimum 1000 BDT Invest.</small>
          </div>
        </div>
      </div>

      <div className="card-holder col-lg-3">
        <div className="icon-holder">
          <img src={work} alt="" />
        </div>
        <div className="card-text-container d-flex justify-content-center align-items-center bg-second-orange">
          <div>
            <h5>
              <b>Quick work</b>
            </h5>
            <small>Up to 10 second to work.</small>
          </div>
        </div>
      </div>

      <div className="card-holder col-lg-3">
        <div className="icon-holder">
          <img src={profit} alt="" />
        </div>
        <div className="card-text-container d-flex justify-content-center align-items-center">
          <div>
            <h5>
              <b>Get Your Profit</b>
            </h5>
            <small>Up to 400% profit here.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
