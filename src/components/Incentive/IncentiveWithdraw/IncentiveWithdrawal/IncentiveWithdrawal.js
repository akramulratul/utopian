import React, { useState } from "react";
import DashboardNav from "../../../Dashboard/DashboardNav";
import IncentiveWithdrawNow from "../IncentiveWithdrawNow";
import SubNav from "../../../Dashboard/Shared/SubNav";
import Sidebar from "../../../Dashboard/Sidebar";
import IncentiveNumberCheck from "./IncentiveNumberCheck";
import ConfirmIncentiveWithdrawal from "./ConfirmIncentiveWithdrawal";
const IncentiveWithdrawal = () => {
  const [method, setMethod] = useState("");
  const [Amount, setAmount] = useState("");
  const [withdrawType, setWithdrawType] = useState("");
  console.log(withdrawType)
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

  if (sessionStorage.getItem("incentiveWithdraw")) {
    const { method, number } = JSON.parse(sessionStorage.getItem("incentiveWithdraw"));
    const incentiveWithdrawInfo = {
      method,
      number,
      Amount,
      withdrawType,
    };
    console.log(incentiveWithdrawInfo);
    sessionStorage.setItem("incentiveWithdraw", JSON.stringify(incentiveWithdrawInfo));
  }
  const closeSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <div>
      <div className="row mr-0">
        {isSideBarOpen && (
          <div
            className={`sidebar-container p-0 ${isSideBarOpen && "sidebar-active col-lg-3"
              }`}
          >
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        )}
        <div
          className={`p-lg-2 m-0 witdraw-background ${isSideBarOpen ? "col-9" : "col-12"
            }`}
        >
          <DashboardNav closeSidebar={closeSidebar} />
          <IncentiveWithdrawNow />
          <div className="bg-white ml-3 mr-3 mt-3">
            <SubNav
              firstOption={{
                link: "/dashboard/incentive/paymentMethod",
                title: "Payment Method",
              }}
              secondOption={{
                link: "/dashboard/incentiveWithdrawal",
                title: "Withdrawal",
              }}
              thirdOption={{ link: "/dashboard/incentive/otp", title: "OTP" }}
            />
            <IncentiveNumberCheck />
            <ConfirmIncentiveWithdrawal setAmount={setAmount} setWithdrawType={setWithdrawType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentiveWithdrawal;
