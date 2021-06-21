import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DepositTop = () => {
  const [isDeposit, SetDeposit] = useState(false);
  const ButtonHandler = () => {
    SetDeposit(!isDeposit);
    console.log("isDeposit");
  };
  return (
    <div className="bg-white d-flex justify-content-between rounded mt-3 ml-4 mr-4">
      <div className="left-content d-flex align-items-center ">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Deposit
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex  align-items-center m-3 p-2">
        <div className="px-3">
          <h2>৳2100.96</h2>
          <small>Available for Withdrawal</small>
        </div>
      </div>
      <div className="align-items-center pt-1">
        <Button className="Deposit-btn " type="button" onClick={ButtonHandler}>
          {isDeposit ? (
            <Link to="/DepositNow">
              <p>Back to Deposit History</p>
            </Link>
          ) : (
            <p>Deposit Now</p>
          )}
        </Button>
      </div>
    </div>
  );
};

export default DepositTop;
