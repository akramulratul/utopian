import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePhoto from "../../image/bp.png";
import { getUserProfile } from "../Redux/Actions/userAction";
import ReferalModal from "./ReferalModal";

const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  console.log(userInfo);
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading Profile...</p>
      ) : loading ? (
        <p>Loading Profile...</p>
      ) : (
        <div className="profile-card-container">
          <div className="profile-card-info">
            <div>
              <div className="profile-card-img d-flex justify-content-center align-items-center mt-3 pt-4">
                <img src={profilePhoto} alt="" />
                <input type="file" class="my_file" />
              </div>
              <div className="d-flex justify-content-center align-items-center profile-card-img"></div>
              <div className="name-level p-2 text-center">
                <h4>{userInfo.name}</h4>
                <h6>{userInfo.userLevel}</h6>
              </div>
            </div>
          </div>
          <div className="account-info mt-2 w-100">
            <div className="holder row">
              <div className="financial-report-item col-lg-4 text-center ">
                <div className="py-2 px-1">
                  <h6>৳ {userInfo.totalAmount}</h6>
                  <small>Total Amount</small>
                </div>
              </div>
              <div className="financial-report-item col-lg-4 text-center  border-left border-right">
                <div className="py-2 px-1">
                  <h6>৳ {userInfo.totalDeposit}</h6>
                  <small>Total Deposit</small>
                </div>
              </div>
              <div className="financial-report-item col-lg-4 text-center">
                <div className="py-2 px-1">
                  <h6>৳ {userInfo.totalWithdrawal}</h6>
                  <small>Total Withdraw</small>
                </div>
              </div>
            </div>
          </div>
          <div className="btn btn-brand w-100 py-2 mt-2" onClick={modalHandler}>
            <h6>Get Referral ID</h6>
          </div>
          <div>
            {isModalOpen ? (
              <ReferalModal
                userInfo={userInfo}
                modalCloseHandler={modalCloseHandler}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
