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

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true);
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
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <div className="sidebar">
          <div className="profile-info py-5  d-flex justify-content-center flex-column align-items-center">
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
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={earningIcon} alt="" />
                </div>
                <div className="pr-5">
                  <h6>
                    <strong>Earning</strong>
                  </h6>
                </div>
                <div className="pl-5 ml-5">
                  <DropdownButton
                    id="dropdown-basic-button"
                    className="bg-light"
                    title=""
                  >
                    <Dropdown.Item>
                      <Link to="/earning">
                        <div className="down">
                          <div className="d-flex py-">
                            <div className="px-2">
                              <img src={rightArrow} alt="" />
                            </div>
                            <div>
                              <h6 className="pt-1">Daily Earning</h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <div className="down">
                        <div className="d-flex py-">
                          <div className="px-2">
                            <img src={rightArrow} alt="" />
                          </div>
                          <div>
                            <h6 className="pt-1">Refrence Bonus</h6>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <div className="down">
                        <div className="d-flex py-">
                          <div className="px-2">
                            <img src={rightArrow} alt="" />
                          </div>
                          <div>
                            <h6 className="pt-1">Generation Bonus</h6>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </DropdownButton>
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
