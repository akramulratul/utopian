import React from "react";
import Sidebar from "../../Sidebar";
import NavPayment from "../PaymentMethod/NavPayment";
import WithdrawNow from "../WithdrawNow";
import ConfirmOtp from "./ConfirmOtp";

const WithdrawOtp = () => {
  return (
    <div>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <Sidebar />
        </div>
        <div className="col-lg-9 p-0">
          <h1>nav bar</h1>
          <WithdrawNow />
          <NavPayment />
          <ConfirmOtp />
        </div>
      </div>
    </div>
  );
};

export default WithdrawOtp;
