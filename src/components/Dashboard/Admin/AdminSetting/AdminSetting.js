import React from "react";
import AdminSidebar from "../AdminSidebar";
import SettingTop from "./SettingTop";
const AdminSetting = () => {
  return (
    <div className="row mr-0">
      <div className="col-lg-3 p-0">
        <AdminSidebar />
      </div>
      <div className="col-lg-9 p-0">
        <SettingTop />
      </div>
    </div>
  );
};

export default AdminSetting;
