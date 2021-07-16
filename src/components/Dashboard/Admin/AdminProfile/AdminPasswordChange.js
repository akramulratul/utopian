import React, { useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import axios from "axios";
import SubNav from "../../Shared/SubNav";
import AdminProfileCard from "./AdminProfileCard";
import AdminChangePassword from "./AdminChangePassword";

const AdminPasswordChange = () => {
  useEffect(() => {
    axios.get("");
  }, []);
  return (
    <div className="profile-container">
      <div className="row m-0 p-0">
        <div className="col-lg-3 m-0 p-0">
          <AdminSidebar />{" "}
        </div>
        <div className="content-holder col-lg-9 m-0 p-0">
          <div className="dash-nav">
            <DashboardNav />
          </div>
          <div className=" row m-0 p-0 profile-content-wrpper">
            <div className="col-lg-8 m-0 p-0 p-lg-3">
              <div className="profile-content">
                <div className="profile-nav">
                  <SubNav
                    firstOption={{
                      link: "/dashboard/admin/profile/details",
                      title: "Profile",
                    }}
                    secondOption={{
                      link: "/dashboard/admin/profile/update-profile",
                      title: "Update Profile",
                    }}
                    thirdOption={{
                      link: "/dashboard/admin/profile/change-password",
                      title: "Change Password",
                    }}
                  />
                </div>
                <div className="profile-content-detail rounded">
                  <AdminChangePassword />
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-lg-3">
              <AdminProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPasswordChange;
