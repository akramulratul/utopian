import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const DepositTop = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const [Deposit, SetAllDeposit] = useState(false);

  // const ButtonHandler = () => {
  //   SetAllDeposit(!Deposit);
  //   console.log("Deposit");
  //   history.push("/admin/deposit");
  //   dispatch.push(ButtonHandler());
  // };
  return (
    <div className="bg-white d-flex justify-content-between rounded mt-3 ml-3 mr-3">
      <div className="left-content d-flex align-items-center ">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                All Deposit
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex  align-items-center m-3 p-2 border-left">
        <div className="px-3">
          <h2>৳2100.96</h2>
          <small>Available for Withdrawal</small>
        </div>
        <div className="px-3">
          <Button
            className="Deposit-btn btn btn-brand w-100 py-2 mt-2"
            type="button"
          >
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepositTop;
