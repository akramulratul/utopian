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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div>
      <div className="row mr-0">
      {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
        <div className={`p-lg-2 m-0 witdraw-background ${isSideBarOpen ? "col-9":"col-12"}`}>
          <DashboardNav closeSidebar={closeSidebar}/>
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
