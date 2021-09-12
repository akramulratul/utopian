import React from "react";
import { Link } from "react-router-dom";
const IncentiveNavPayment = () => {
  return (
    <div>
      <div className="dash-right-second-card mx-0 mt-0 witdraw-background">
        <div className="row dash-right-second-holder">
          <div className="col-lg-4 right-second-card text-center py-3">
            <div className="">
              <small>
                <b>
                  <Link to="/dashboard/incentiveWithdrawal">
                    Payment Method
                  </Link>
                </b>
              </small>
            </div>
          </div>
          <div className="col-lg-4 right-second-card text-center py-3">
            <div className="">
              <small>
                <b>
                  <Link to="/dashboard/incentiveWithdrawal">Withdrawal</Link>
                </b>
              </small>
            </div>
          </div>
          <div className="col-lg-4 right-second-card text-center py-3">
            <div>
              <small>
                <Link to="/dashboard/incentive/otp">
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

export default IncentiveNavPayment;
