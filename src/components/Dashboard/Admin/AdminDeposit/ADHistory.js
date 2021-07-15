import React, { useEffect } from "react";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import setting from "../../../../image/settings.svg";
import {
  adminDepositeManageAction,
  getAdminDepositeHistory,
} from "../../../Redux/Actions/adminBalanceControlAction";
import Withdrawal from "../../Withdraw/Withdrawal/Withdrawal";

const ADHistory = () => {
  const [isloading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  const adminDeposit = useSelector((state) => state.adminDeposit);
  const { loading, error, depositInfo } = adminDeposit;

  const depositManage = useSelector((state) => state.depositManage);
  const { depositStatus } = depositManage;
  const stopLoading = () => {
    setIsloading(false);
  };
  useEffect(() => {
    dispatch(getAdminDepositeHistory());
    stopLoading();
  }, [dispatch]);

  const approveHandler = (id) => {
    const data = {
      id: id,
      status: "Approved",
    };
    dispatch(adminDepositeManageAction(data));
  };
  const declineHandler = (id) => {
    const data = {
      id: id,
      status: "Rejected",
    };
    dispatch(adminDepositeManageAction(data));
  };
  const viewHandler = (id) => {
    const data = {
      id: id,
      // status: "Rejected",
    };
    // dispatch(adminDepositeManageAction(data));
  };

  return (
    <div>
      {isloading ? (
        <p>Loading...</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-3 bg-white p-3 m-3 rounded">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">
                  <div className="d-flex">
                    Name{" "}
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th scope="col">
                  <div className="d-flex">
                    TXN Id{" "}
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
              {depositInfo.data.map((deposite) => {
                return (
                  <tr>
                    <td>{deposite.createdBy}</td>
                    <td>{deposite.transactionId}</td>
                    <td>{deposite.depositAmount} TK</td>
                    <td>{deposite.status}</td>
                    <td>
                      {new Date(deposite.createdOn).getDate()}/
                      {new Date(deposite.createdOn).getMonth()}/
                      {new Date(deposite.createdOn).getFullYear()}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <img src={setting} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => approveHandler(deposite.id)}
                          >
                            <b>Aprove</b>
                          </Dropdown.Item>

                          <Dropdown.Item
                            onClick={() => declineHandler(deposite.id)}
                          >
                            Decline
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => viewHandler(deposite.id)} >
                            <Link to={`/admin/depositdetails/${deposite.id}`} >View Details</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ADHistory;
