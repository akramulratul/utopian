import React from "react";
import UserTableRow from "./UserTableRow";
import UserProfileCard from "./UserProfileCard";
import UserSubnav from "./UserSubnav";
import AdminSidebar from "../../AdminSidebar";
import DashboardNav from "../../../DashboardNav";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { adminUserDetailsListAction } from "../../../../Redux/Actions/adminDashboardAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const UserProfileDetails = () => {
  const { username } = useParams()
  console.log(username);
  const dispatch = useDispatch();
  const UserList = useSelector((state) => state.adminUserDetailsList);
  const { loading, error, userListInfo } = UserList;
  // console.log(loading, error, userListInfo);
  // loading ? console.log("notfound") : console.log(userListInfo.data);
  const [isLoading, setIsLoading] = useState(true);

  const stopLoading = () => {
    setIsLoading(false);
  };
  const [info, setInfo] = useState("")






  useEffect(() => {
    dispatch(adminUserDetailsListAction(username));
    stopLoading();
  }, [dispatch]);


  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : loading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
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
                          // link: "/admin/users/profile/details",
                          title: "Profile",
                        }}
                      />
                    </div>

                    <div className="details-wrapper bg-white">
                      <UserTableRow title="Full Name" data={userListInfo.data[0].name} />
                      <UserTableRow title="Email" data={userListInfo.data[0].email} />
                      <UserTableRow
                        title="Phone Number"
                        data={userListInfo.data[0].phoneNo}
                      />
                      <UserTableRow
                        title="Current Level"
                        data={userListInfo.data[0].userLevel}
                      />
                      {/* <UserTableRow title="Address" data="Address" />
                      <UserTableRow title="City" data="City" />
                      <UserTableRow title="Country" data="Bangladesh" /> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-lg-3">
                  <UserProfileCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfileDetails;
