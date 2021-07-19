import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import DashboardNav from "../Dashboard/DashboardNav";
import axios from "axios";
import SubNav from "../Dashboard/Shared/SubNav";
import { Route } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import UpdateProfile from "./UpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../Redux/Actions/userAction";

const ProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const dispatch = useDispatch();
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, error, userInfo } = getProfile;
  const stopLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getUserProfile());
    stopLoading();
  }, [dispatch]);
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
        <div className={`p-0 m-0 content-holder ${isSideBarOpen ? "col-9":"col-12"}`}>
          <div className="dash-nav">
            <DashboardNav closeSidebar={closeSidebar}/>
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
                <div className="profile-content-detail rounded">
                  {isLoading ? (
                    <h4>Loading Profile...</h4>
                  ) : loading ? (
                    <h4>Loading Profile...</h4>
                  ) : (
                    <UpdateProfile userInfo={userInfo} />
                  )}
                </div>
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

export default ProfileUpdate;
