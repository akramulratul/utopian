import React from "react";
import Sidebar from "../../Dashboard/Sidebar";
import DashboardNav from "../../Dashboard/DashboardNav";
import DepositTop from "../DepositTop";
import DepositLeft from "./DepositLeft";
import DepositRight from "./DepositRight";
const DepositNow = () => {
  return (
    <div className="row m-0 p-0 ">
      <div className="col-lg-3 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 Deposit-bg">
        <div>
          <DashboardNav />
        </div>
        <div className="ml-2 mr-2">
          <DepositTop />
        </div>
        <div className=" ml-4 mt-3 mr-4 d-flex">
          <DepositLeft />
          <DepositRight />
        </div>
      </div>
    </div>
  );
};

export default DepositNow;
