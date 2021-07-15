import React from "react";
import AdminSidebar from "../AdminSidebar";
import SettingTop from "./SettingTop";
import DashboardNav from "../../DashboardNav";
import SettingContent from "./SettingContent";
const AdminSetting = () => {
  return (
    <div className="row mr-0">
      <div className="col-lg-3 p-0">
        <AdminSidebar />
      </div>
      <div className="incentive-background col-lg-9 p-0">
        <DashboardNav />
        <SettingTop />
        <SettingContent />
      </div>
    </div>
  );
};

export default AdminSetting;
