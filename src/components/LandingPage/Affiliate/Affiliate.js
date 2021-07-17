import React from "react";
import affiliateImg from "../../../image/Affiliate/commision 3.svg";
import check from "../../../image/TypeOfIncome/check.svg";
const Affiliate = () => {
  return (
    <div className="affiliate-container mt-4">
      <div className="row m-0 p-0">
        <div className="col-lg-6">
          <div className="affiliate-banner-image d-flex justify-content-end align-items-center">
            <img src={affiliateImg} alt="" />
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-start align-items-center">
          <div className="affiliate-text text-white p-4">
            <h1 className="py-1">
              <b>Make money by Affiliate without invest</b>
            </h1>
            <p>
              Are you knowledge base tell just some words we will came back
              within 5 minutes
            </p>
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center ">
                  <img className="p-4" src={check} alt="" />
                  <p className="pt-3">
                    <strong>Affiliate Shopping</strong>
                  </p>
                </div>

                <div className="d-flex align-items-center ">
                  <img className="p-4" src={check} alt="" />
                  <p className="pt-3">
                    <strong>Affiliate Registration</strong>
                  </p>
                </div>

                <div className="d-flex align-items-center ">
                  <img className="p-4" src={check} alt="" />
                  <p className="pt-3">
                    <strong>Affiliate Sell</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-6  d-flex justify-content-start align-items-center">
                <div className="comission">
                  <div className="comission-text">
                    <h1>20%</h1>
                    <p>Referal Comission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
