import React from "react";
import DashboardNav from "../../DashboardNav";
import AdminSidebar from "../AdminSidebar";
import DepositTop from "../../Admin/AdminDeposit/DepositTop";
import ADHistory from "./ADHistory";
import Paginations from "../Paginations/Paginations";
const Deposit = () => {
  return (
    <div>
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
            <ADHistory />
          </div>
          <div>
            <Paginations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
