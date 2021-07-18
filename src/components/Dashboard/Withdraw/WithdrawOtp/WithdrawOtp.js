import React, { useState } from "react";
import DashboardNav from "../../DashboardNav";
import SubNav from "../../Shared/SubNav";
import Sidebar from "../../Sidebar";
import WithdrawNow from "../WithdrawNow";
import ConfirmOtp from "./ConfirmOtp";

const WithdrawOtp = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
        <div className={`p-0 m-0 witdraw-background ${isSideBarOpen ? "col-9":"col-12"}`}>
          <DashboardNav  closeSidebar={closeSidebar}/>
          <WithdrawNow />
          <div className="bg-white ml-3 mr-3 mt-3">
            <SubNav
              firstOption={{ link: "/payment-method", title: "Payment Method" }}
              secondOption={{ link: "/withdrawal", title: "Withdrawal" }}
              thirdOption={{ link: "/otp", title: "OTP" }}
            />
            <ConfirmOtp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawOtp;
