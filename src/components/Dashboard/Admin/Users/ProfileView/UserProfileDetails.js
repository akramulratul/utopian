import React from "react";
import UserTableRow from "./UserTableRow";
import UserProfileCard from "./UserProfileCard";
import UserSubnav from "./UserSubnav";
import AdminSidebar from "./AdminSidebar";
import DashboardNav from "./DashboardNav";
const UserProfileDetails = () => {
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
                {!isLoading ? (
                  loading ? (
                    <p>loading...</p>
                  ) : (
                    <div className="details-wrapper bg-white">
                      <UserTableRow title="Full Name" data={userInfo.name} />
                      <UserTableRow title="Email" data={userInfo.email} />
                      <UserTableRow
                        title="Phone Number"
                        data={userInfo.phoneNo}
                      />
                      <UserTableRow
                        title="Current Level"
                        data={userInfo.userLevel}
                      />
                      <UserTableRow
                        title="About"
                        data="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                      />
                      <UserTableRow title="Address" data={userInfo.address} />
                      <UserTableRow title="City" data={userInfo.district} />
                      <UserTableRow title="Country" data="Bangladesh" />
                    </div>
                  )
                ) : (
                  <p>Loading...</p>
                )}
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

export default UserProfileDetails;
