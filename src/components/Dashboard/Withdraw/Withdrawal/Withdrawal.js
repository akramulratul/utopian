import React from "react";
import Sidebar from "../../Sidebar";
import NavPayment from "../PaymentMethod/NavPayment";
import WithdrawNow from "../WithdrawNow";
import AmountSelection from "./AmountSelection";
import ConfirmWithdrawal from "./ConfirmWithdrawal";
import DashboardNav from "../../DashboardNav";
import SubNav from "../../Shared/SubNav";

const Withdrawal = () => {
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
            <SubNav
              firstOption={{ link: "/payment-method", title: "Payment Method" }}
              secondOption={{ link: "/withdrawal", title: "Withdrawal" }}
              thirdOption={{ link: "/otp", title: "OTP" }}
            />
            <AmountSelection />
            <ConfirmWithdrawal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
