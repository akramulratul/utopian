import React, { useState } from "react";
import DashboardNav from "../../../Dashboard/DashboardNav";
import SubNav from "../../../Dashboard/Shared/SubNav";
import Sidebar from "../../../Dashboard/Sidebar";
import IncentiveWithdrawNow from "../IncentiveWithdrawNow";
import InConfirmOtp from "./InConfirmOtp";
const IncentiveWithdrawOtp = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <div className="row mr-0">
        {isSideBarOpen && (
          <div
            className={`sidebar-container p-0 ${
              isSideBarOpen && "sidebar-active col-lg-3"
            }`}
          >
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        )}
        <div
          className={`p-0 m-0 witdraw-background ${
            isSideBarOpen ? "col-9" : "col-12"
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
            <InConfirmOtp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentiveWithdrawOtp;
