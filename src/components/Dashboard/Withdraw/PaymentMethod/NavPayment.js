import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavPayment = () => {
  return (
    <div className="dash-right-second-card mx-1 mt-5">
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
  );
};

export default NavPayment;
