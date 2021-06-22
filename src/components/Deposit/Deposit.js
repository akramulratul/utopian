import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import DashboardNav from "../Dashboard/DashboardNav";
import DepositTop from "./DepositTop";
import DepositHistory from "./DepositHistory";

const Deposit = () => {
  return (
    <div className="row m-0 p-0 ">
      <div className="col-lg-2 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-10 m-0 p-0 Deposit-bg">
        <div>
          <DashboardNav />
        </div>
        <div className="ml-2">
          <DepositTop />
        </div>
        <div className="ml-4 mt-3 mr-3">
          <DepositHistory />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
