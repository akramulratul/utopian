import React from "react";
import { Link } from "react-router-dom";

const NavPayment = () => {
  return (
    <div>
      <div className="dash-right-second-card mx-0 mt-0 witdraw-background">
        <div className="row dash-right-second-holder">
          <div className="col-lg-4 right-second-card text-center py-3">
            <div className="">
              <small>
                <b>
                  <Link to="/payment-method">Payment Method</Link>
                </b>
              </small>
            </div>
          </div>
          <div className="col-lg-4 right-second-card text-center py-3">
            <div className="">
              <small>
                <b>
                  <Link to="/withdrawal">Withdrawal</Link>
                </b>
              </small>
            </div>
          </div>
          <div className="col-lg-4 right-second-card text-center py-3">
            <div className="">
              <small>
                <Link to="/otp">
                  <b>OTP</b>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavPayment;
