import React, { useEffect, useState } from "react";
import avater from "../../image/bp.png";
import dashIcon from "../../image/icons/dash.svg";
import profileIcon from "../../image/icons/profile.svg";
import depositeIcon from "../../image/icons/depo.svg";
import withdrawIcon from "../../image/icons/with.svg";
import earningIcon from "../../image/icons/earn.svg";
import rightArrow from "../../image/icons/right.svg";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../Redux/Actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import balanceReport from "../../image/icons/IconBalanceReport.svg";
import downArrow from "../../image/icons/down.svg";

const Sidebar = ({ closeSidebar }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEarningOpen, setIsEarningOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const dispatch = useDispatch();
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, userInfo } = getProfile;
  console.log(userInfo);
  const stopLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getUserProfile());
    stopLoading();
  }, [dispatch]);

  const handleEarningDropdown = () => {
    setIsEarningOpen(!isEarningOpen);
  };
  const handleBalanceDropdown = () => {
    setIsBalanceOpen(!isBalanceOpen);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <div className="sidebar">
          <div className="profile-info py-5  d-flex justify-content-center flex-column align-items-center">
            <FontAwesomeIcon
              onClick={closeSidebar}
              style={{ position: "absolute", top: "2px", right: "2px" }}
              icon={faTimesCircle}
              size="2x"
            />
            <div className="profile-image pb-3">
              <img src={userInfo.profilePhotoLink} alt="" />
            </div>
            <div className="profile-name">
              <h5>{userInfo.name}</h5>
              <small>User lavel</small>
            </div>
          </div>
          <div className="dashbord-menu-wrapper">
            <div className="dashboard-menu">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={dashIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <Link to="/dashboard">
                      <strong>Dashboard</strong>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="dashboard-menu">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={profileIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <Link to="/dashboard/user/profile/details">
                      <strong>My Profile</strong>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="dashboard-menu">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={depositeIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <Link to="/Deposit">
                      <strong>Deposit</strong>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="dashboard-menu">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={withdrawIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <Link to="/payment-method">
                      <strong>Withdrawal</strong>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="dashboard-menu">
              <div className="d-flex py-3" onClick={handleEarningDropdown}>
                <div className="px-5">
                  <img src={earningIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <b>Earning</b>
                  </h6>
                </div>
                <div className="pl-5">
                  <img src={downArrow} alt="" />
                </div>
              </div>
            </div>
            {isEarningOpen && (
              <div className="earning-dropdown">
                <div className="dashboard-menu">
                  <div className="d-flex py-3">
                    <div className="px-5">
                      <h6 className="d-flex justify-content-center">
                        <Link to="/earning">Daily Earning</Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="dashboard-menu">
                  <div className="d-flex py-3">
                    <div className="px-5">
                      <h6>
                        <a href="/dashboard/referral">
                          <Link to="/dashboard/referral">Refrence Bonus</Link>
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="dashboard-menu">
              <div className="d-flex py-3" onClick={handleBalanceDropdown}>
                <div className="px-5">
                  <img src={balanceReport} alt="" />
                </div>
                <div>
                  <h6>
                    <b>Balance Report</b>
                  </h6>
                </div>
                <div className="pl-5">
                  <img src={downArrow} alt="" />
                </div>
              </div>
            </div>

            {isBalanceOpen && (
              <div className="balance-dropdown">
                <div className="dashboard-menu">
                  <div className="d-flex py-3">
                    <div className="px-5">
                      <h6>
                        <Link to="/dashboard/user/incentive">
                          Direct Incentive
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="dashboard-menu">
                  <div className="d-flex py-3">
                    <div className="px-5">
                      <h6>
                        <Link to="/dashboard/user/teamincentive">
                          Team Incentive
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="dashboard-menu">
                  <div className="d-flex py-3">
                    <div className="px-5">
                      <h6>
                        <Link to="/dashboard/user/salary">Salary</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="dashboard-menu">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={withdrawIcon} alt="" />
                </div>
                <div>
                  <h6>
                    <Link to="/dashboard/incentive/paymentMethod">
                      <strong> Incentive Withdrawal</strong>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
