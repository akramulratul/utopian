import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../../AdminSidebar";
import Paginations from "../../Paginations/Paginations";
import AdminWithdrawHistory from "./AdminWithdrawHistory";
import AdminWithdrawTop from "./AdminWithdrawTop";
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
            <AdminWithdrawTop />
          </div>
          <div>
            <AdminWithdrawHistory />
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
