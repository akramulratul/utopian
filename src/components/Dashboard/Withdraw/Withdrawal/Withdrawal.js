import React from "react";
import Sidebar from "../../Sidebar";
import WithdrawNow from "../WithdrawNow";
import AmountSelection from "./AmountSelection";
import ConfirmWithdrawal from "./ConfirmWithdrawal";
import DashboardNav from "../../DashboardNav";
import SubNav from "../../Shared/SubNav";
import { useState } from "react";

const Withdrawal = () => {
  const [method, setMethod] = useState("");
  const [Amount, setAmount] = useState("");
  const WithdrawalMethod = {
    method: method,
    amount: Amount,
  };

  const WithdrawAmount = (number) => {
    if (number < 500) {
      alert("plz required");
    } else {
      setAmount(number);
    }
  };
  // console.log(WithdrawalMethod);
  console.log(Amount);

  if (sessionStorage.getItem("withdraw")) {
    const { method, number } = JSON.parse(sessionStorage.getItem("withdraw"));
    const withdrawInfo = {
      method,
      number,
      Amount,
    };
    console.log(withdrawInfo);
    sessionStorage.setItem("Withdrawal", JSON.stringify(withdrawInfo));
  }

  return (
    <div>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <Sidebar />
        </div>
        <div className="col-lg-9 p-0 witdraw-background">
          <DashboardNav />
          <WithdrawNow />
          <div className="bg-white ml-3 mr-3 mt-3">
            <SubNav
              firstOption={{ link: "/payment-method", title: "Payment Method" }}
              secondOption={{ link: "/withdrawal", title: "Withdrawal" }}
              thirdOption={{ link: "/otp", title: "OTP" }}
            />
            <AmountSelection />
            <ConfirmWithdrawal setAmount={setAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
