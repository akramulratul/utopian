import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import DashboardNav from "../Dashboard/DashboardNav";
import SubNav from "../Dashboard/Shared/SubNav";
import TableRow from "./TableRow";
import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../Redux/Actions/userAction";

const ProfileDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, userInfo } = getProfile;
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
          <Sidebar />
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
                {!isLoading ? (
                  loading ? (
                    <p>loading...</p>
                  ) : (
                    <div className="details-wrapper bg-white">
                      <TableRow title="Full Name" data={userInfo.name} />
                      <TableRow title="Email" data={userInfo.email} />
                      <TableRow title="Phone Number" data={userInfo.phoneNo} />
                      <TableRow
                        title="Current Level"
                        data={userInfo.userLevel}
                      />
                      <TableRow title="About" data={userInfo.thana} />
                      <TableRow title="Address" data={userInfo.address} />
                      <TableRow title="City" data={userInfo.district} />
                      <TableRow title="Country" data="Bangladesh" />
                    </div>
                  )
                ) : (
                  <p>Loading...</p>
                )}
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

export default ProfileDetails;
