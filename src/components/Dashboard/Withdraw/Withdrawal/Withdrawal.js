import React from "react";
import Sidebar from "../../Sidebar";
import NavPayment from "../PaymentMethod/NavPayment";
import WithdrawNow from "../WithdrawNow";
import AmountSelection from "./AmountSelection";
import ConfirmWithdrawal from "./ConfirmWithdrawal";

const Withdrawal = () => {
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
          <AmountSelection />
          <ConfirmWithdrawal />
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
