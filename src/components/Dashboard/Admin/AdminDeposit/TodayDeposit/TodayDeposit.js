import React from "react";
import AdminSidebar from "../../AdminSidebar";
import DepositTop from "../DepositTop";
import DashboardNav from "../../../DashboardNav";
import TodayDepositHstry from "./TodayDepositHstry";
import Paginations from "../../Paginations/Paginations";
const TodayDeposit = () => {
  return (
    <div className="row mr-0">
      <div className="col-lg-3 p-0">
        <AdminSidebar />
      </div>
      <div className="col-lg-9 p-0 witdraw-background">
        <div>
          <DashboardNav />
        </div>
        <div>
          <DepositTop />
        </div>
        <div>
          <TodayDepositHstry />
        </div>
        <div>
          <Paginations />
        </div>
      </div>
    </div>
  );
};

export default TodayDeposit;
