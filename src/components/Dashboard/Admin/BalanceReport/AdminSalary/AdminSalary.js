import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../../AdminSidebar";
import AdminSalaryHistory from "./AdminSalaryHistory";
import TopAdminSalary from "./TopAdminSalary";
const AdminSalary = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-3 m-0 p-0">
        <AdminSidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 incentive-background">
        <div className="dash-nav">
          <DashboardNav />
        </div>
        <TopAdminSalary />
        <AdminSalaryHistory />
      </div>
    </div>
  );
};

export default AdminSalary;
