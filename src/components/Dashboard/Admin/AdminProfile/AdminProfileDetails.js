import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import SubNav from "../../Shared/SubNav";
import AdminTableRow from "./AdminTableRow";
import AdminProfileCard from "./AdminProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../Redux/Actions/userAction";

const AdminProfileDetails = () => {
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
                {!isLoading ? (
                  loading ? (
                    <p>loading...</p>
                  ) : (
                    <div className="details-wrapper bg-white">
                      <AdminTableRow title="Full Name" data={userInfo.name} />
                      <AdminTableRow title="Email" data={userInfo.email} />
                      <AdminTableRow
                        title="Phone Number"
                        data={userInfo.phoneNo}
                      />
                      <AdminTableRow
                        title="Current Level"
                        data={userInfo.userLevel}
                      />
                      <AdminTableRow title="About" data={userInfo.thana} />
                      <AdminTableRow title="Address" data={userInfo.address} />
                      <AdminTableRow title="City" data={userInfo.district} />
                      <AdminTableRow title="Country" data="Bangladesh" />
                    </div>
                  )
                ) : (
                  <p>Loading...</p>
                )}
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

export default AdminProfileDetails;
