import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../../AdminSidebar";
import WithdrawContant from "./WithdrawContant";
const WithdrawDetails = () => {
  return (
    <div>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <AdminSidebar />
        </div>
        <div className="col-lg-9 p-0 witdraw-background">
          <DashboardNav />
          <WithdrawContant />
        </div>
      </div>
    </div>
  );
};

export default WithdrawDetails;
