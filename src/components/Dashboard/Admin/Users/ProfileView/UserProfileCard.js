import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import profilePhoto from "../../../../../image/profile.png";
import { adminUserSuspendAction, adminUserTemporarySuspendAction } from "../../../../Redux/Actions/adminDashboardAction";

const ProfileCard = () => {
  // const dispatch = useDispatch();
  const UserList = useSelector((state) => state.adminUserDetailsList);
  const { loading, error, userListInfo } = UserList;
  const [isLoading, setIsLoading] = useState(true);

  const stopLoading = () => {
    setIsLoading(false);
  };
  const [info, setInfo] = useState("")

  const dispatch = useDispatch()

  const Suspend = () => {
    console.log(userListInfo.data[0].username);
    const username = userListInfo.data[0].username
    dispatch(adminUserSuspendAction(username));

  }
  const temporarySuspend = () => {
    console.log(userListInfo.data[0].username);
    const username = userListInfo.data[0].username
    dispatch(adminUserTemporarySuspendAction(username));

  }

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="profile-card-container">
          <div className="profile-card-info">
            <div>
              <div className="profile-card-img  d-flex justify-content-center align-items-center mt-3 pt-4">
                <img src={profilePhoto} alt="" />
              </div>
              <div className="name-level p-2 text-center">
                <h4>{userListInfo.data[0].username}</h4>
                <h6>User Level</h6>
              </div>
            </div>
          </div>
          <div className="account-info mt-2 w-100">
            <div className="holder row">
              <div className="financial-report-item col-lg-4 text-center ">
                <div className="py-2 px-1">
                  <h6>৳ {userListInfo.data[0].totalAmount == null ? "00" : userListInfo.data[0].totalAmount}</h6>
                  <small>Total Amount</small>
                </div>
              </div>
              <div className="financial-report-item col-lg-4 text-center  border-left border-right">
                <div className="py-2 px-1">
                  <h6>৳ {userListInfo.data[0].totalDeposit == null ? "00" : userListInfo.data[0].totalDeposit}</h6>
                  <small>Total Deposit</small>
                </div>
              </div>
              <div className="financial-report-item col-lg-4 text-center">
                <div className="py-2 px-1">
                  <h6>৳ {
                    userListInfo.data[0].totalWithdrawal == null ? "00" : userListInfo.data[0].totalWithdrawal}</h6>
                  <small>Total Withdraw</small>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" className="button btn-danger" onClick={Suspend}>
            <h6>Suspend</h6>
          </Button>
          <button type="submit" className="button btn-warning m-2 " onClick={temporarySuspend}>
            <h6>Temporary Suspend </h6>
          </button>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ProfileCard;
