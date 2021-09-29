import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../styles/_Withdraw.scss";

const IncentiveNumberCheck = () => {
  const { method, number } = JSON.parse(sessionStorage.getItem("incentiveWithdraw"));
  // console.log(method,number)
  return (
    <div className=" d-flex justify-content-between rounded mt-3 ml-4 mr-4 border">
      <div className="left-content d-flex align-items-center">
        <p>Payment Method: Bkash</p>
      </div>
      <div className="right-content d-flex  align-items-center  border-left">
        <div className="px-3 ">
          <small>
            <span>Number</span>
          </small>
          <h4>{number || "00" }</h4>
        </div>
        <div className="align-items-end">
          <Link to="/dashboard/incentive/paymentMethod">
            <Button variant="primary" className="btn-change">
              <h5 className="text-center">Change</h5>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IncentiveNumberCheck;
