import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../Redux/Actions/userAction";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";


const Dashboard = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const stopLoading = () => {
    setisLoading(false);
  };
  useEffect(() => {
    dispatch(getUserProfile());
    stopLoading();
  }, [dispatch]);
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, error, userInfo } = getProfile;
  console.log(userInfo);
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <>
      <div>
        <div className="row  mr-0">
         {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
          <div className={`p-0 ${isSideBarOpen ? "col-9":"col-12"}`}>
            {isLoading ? (
              <p>loading...</p>
            ) : (
              <div>
                <DashboardContent closeSidebar={closeSidebar} depositeData={userInfo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
