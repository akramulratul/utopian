import React from "react";
import AdminSidebar from "../../AdminSidebar";
import DashboardNav from "../../../DashboardNav";
import UserSubnav from "../ProfileView/UserSubnav";
import UserProfileCard from "./UserProfileCard";
const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="row m-0 p-0">
        <div className="col-lg-3 m-0 p-0">
          <AdminSidebar />
        </div>
        <div className="content-holder col-lg-9 m-0 p-0">
          <div className="dash-nav">
            <DashboardNav />
          </div>
          <div className=" row m-0 p-0 profile-content-wrpper">
            <div className="col-lg-8 m-0 p-0 p-lg-3">
              <div className="profile-content">
                <div className="profile-nav">
                  <UserSubnav
                    firstOption={{
                      link: "/admin/users/profile/details",
                      title: "Profile",
                    }}
                    secondOption={{
                      link: "/admin/users/profile/update-profile",
                      title: "Update Profile",
                    }}
                  />
                </div>
                <div className="profile-content-detail rounded"></div>
              </div>
            </div>
            <div className="col-lg-4 p-lg-3">
              <UserProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
