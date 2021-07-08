import React from "react";
import { useState } from "react";
import updownIcon from "../../../../../image/icons/updown_icon.svg";
import setting from "../../../../../image/icons/settings.svg";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  adminWithdrawManageAction,
  getAdminWithdrawHistory,
} from "../../../../Redux/Actions/adminBalanceControlAction";
const AdminWithdrawHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const withdrawHistory = useSelector((state) => state.adminWithdraw);
  const { loading, withdrawInfo } = withdrawHistory;
  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getAdminWithdrawHistory());
    stopLoading();
  }, []);

  const approveHandler = (id) => {
    const data = {
      id: id,
      status: "Approved",
    };
    dispatch(adminWithdrawManageAction(data));
  };
  const declineHandler = (id) => {
    const data = {
      id: id,
      status: "Rejected",
    };
    dispatch(adminWithdrawManageAction(data));
  };
  return (
    <div>
      <div className="mt-3 bg-white p-3 m-3 rounded">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">
                <div className="d-flex">
                  User Name{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Number{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>

              <th scope="col">
                <div className="d-flex">
                  Amount{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Payment{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Status{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Created At{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">Action </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <p>Loading Data...</p>
            ) : loading ? (
              <p>Loading Data...</p>
            ) : (
              withdrawInfo.data.map((info) => {
                return (
                  <tr>
                    <td>{info.createdBy}</td>
                    <td>
                      {info.contactNo} ( {info.withdrawMethod} )
                    </td>
                    <td>{info.amount} TK</td>
                    <td>{info.amount - info.amount * 0.05} TK</td>
                    <td>{info.status}</td>
                    <td>
                      {new Date(info.createdOn).getDate()}/
                      {new Date(info.createdOn).getMonth()}/
                      {new Date(info.createdOn).getFullYear()}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <img src={setting} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => approveHandler(info.id)}
                            className="bg-success text-white "
                          >
                            <b>Aprove</b>
                          </Dropdown.Item>

                          <Dropdown.Item
                            onClick={() => declineHandler(info.id)}
                            className="bg-danger text-white"
                          >
                            <b>Decline</b>
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="#/action-3">
                            View Details
                          </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWithdrawHistory;
