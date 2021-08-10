import React from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import TopAdminIncentive from "./TopAdminIncentive";
import AdminIncentiveHistory from "./AdminIncentiveHistory";

const AdminIncentive = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-3 m-0 p-0">
        <AdminSidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 incentive-background">
        <div className="dash-nav">
          <DashboardNav />
        </div>
        <TopAdminIncentive />
        <AdminIncentiveHistory />
      </div>
    </div>
  );
};

export default AdminIncentive;
