import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import axios from "axios";
import SubNav from "../../Shared/SubNav";
import { Route } from "react-router-dom";
import AdminProfileCard from "./AdminProfileCard";
import AdminUpdateProfile from "./AdminUpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../Redux/Actions/userAction";

const AdminProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
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
                  {isLoading ? (
                    <h4>Loading Profile...</h4>
                  ) : loading ? (
                    <h4>Loading Profile...</h4>
                  ) : (
                    <AdminUpdateProfile userInfo={userInfo} />
                  )}
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

export default AdminProfileUpdate;
