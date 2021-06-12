import React from "react";
import DashboardNav from "../../DashboardNav";
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
        <div className="col-lg-9 p-0 witdraw-background">
          <DashboardNav />
          <WithdrawNow />
          <div className="bg-white container ml-3 mr-3 mt-3">
            <NavPayment />
            <ConfirmOtp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawOtp;
