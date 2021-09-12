import React, { useState } from "react";
import Sidebar from "../../Dashboard/Sidebar";
import DashboardNav from "../../Dashboard/DashboardNav";
import IncentiveWithdrawNow from "./IncentiveWithdrawNow";
import IncentiveWithdrawHistory from "./IncentiveWithdrawHistory/IncentiveWithdrawHistory";

const IncentiveWithdraw = () => {
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
          <IncentiveWithdrawHistory />
        </div>
      </div>
    </div>
  );
};

export default IncentiveWithdraw;
