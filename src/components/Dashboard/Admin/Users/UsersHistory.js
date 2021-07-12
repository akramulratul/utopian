import React from "react";
import { Table } from "react-bootstrap";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import { Dropdown } from "react-bootstrap";
import setting from "../../../../image/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminUserListAction } from "../../../Redux/Actions/adminDashboardAction";
import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
const UsersHistory = () => {
  const dispatch = useDispatch();
  const allUserList = useSelector((state) => state.adminUserList);
  console.log(allUserList.adminInfo);
  const { loading, error, userListInfo } = allUserList;
  console.log(userListInfo);
  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };

  useEffect(() => {
    dispatch(adminUserListAction());
    stopLoading();
  }, [dispatch]);
  // const { data } = allUserList.adminInfo
  // console.log(data);

  return (
    <>
      {isloading ? (
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
        <div className="bg-white mt-2 ml-2 p-3 m-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className="d-flex">
                    <div>Name</div>
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    <div>Email</div>
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th className="d-flex">
                  <div>Level</div>
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </th>
                <th>Status</th>
                <th className="d-flex ">
                  <div>Created At</div>
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userListInfo.data.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.userLevel}</td>
                    <td>Active</td>
                    <td>
                      {new Date(user.createdOn).getDate()}/
                      {new Date(user.createdOn).getMonth()}/
                      {new Date(user.createdOn).getFullYear()}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <img src={setting} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className="dropdown">
                            <Link to="/admin/users/profile/details">
                              <b>View Details</b>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown">
                            <b>Suspend</b>
                          </Dropdown.Item>

                          <Dropdown.Item className="dropdown">
                            Deposits
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="dropdown">
                            Withdrawals
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default UsersHistory;
