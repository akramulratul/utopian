import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import profilePhoto from "../../../../../image/profile.png";

const ProfileCard = () => {
  // const dispatch = useDispatch();
  const UserList = useSelector((state) => state.adminUserDetailsList);
  const { loading, error, userListInfo } = UserList;
  console.log(loading, error, userListInfo);
  // loading ? console.log("notfound") : console.log(userListInfo.data);
  const [isLoading, setIsLoading] = useState(true);

  const stopLoading = () => {
    setIsLoading(false);
  };
  const [info, setInfo] = useState("")


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
                <h4>{userListInfo.data[0].name}</h4>
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
          <div className="btn button-decline btn-brand w-100 py-2 mt-2">
            <h6>Suspend</h6>
          </div>
          <div className="btn btn-warning w-100 py-2 mt-2">
            <h6>Temporary Suspend</h6>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
