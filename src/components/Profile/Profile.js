import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import DashboardNav from "../Dashboard/DashboardNav";
import axios from "axios";
import SubNav from "../Dashboard/Shared/SubNav";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  useEffect(() => {
    axios.get("");
  }, []);
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <div className="profile-container">
      <div className="row m-0 p-0">
      {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
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
                      link: "/dashboard/user/profile/details",
                      title: "Profile",
                    }}
                    secondOption={{
                      link: "/dashboard/user/profile/update-profile",
                      title: "Update Profile",
                    }}
                    thirdOption={{
                      link: "/dashboard/user/profile/change-password",
                      title: "Change Password",
                    }}
                  />
                </div>
                <div className="profile-content-detail rounded"></div>
              </div>
            </div>
            <div className="col-lg-4 p-lg-3">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
