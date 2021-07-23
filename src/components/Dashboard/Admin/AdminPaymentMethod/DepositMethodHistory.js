import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import setting from "../../../../image/settings.svg";
import Bkash from "../../../../image/icons/B-kash.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { deleteDepositMethodHistory, getDepositMethodHistory } from "../../../Redux/Actions/adminDepositMethodAction";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const DepositMethodHistory = () => {
  const dispatch = useDispatch();
  const depositHistory = useSelector((state) => state.depositMethodHistory);
  const { loading, error, depositMethodHistory } = depositHistory;

  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };

  useEffect(() => {
    dispatch(getDepositMethodHistory());
    stopLoading();
  }, [dispatch]);
  // const { data } = allUserList.adminInfo
  // console.log(data);

  const history = useHistory()
  const edit = (id) => {
    history.push(`/admin/addnew/edit/${id}`)
  }
  const userDelete = (id) => {
    dispatch(deleteDepositMethodHistory(id))
  }
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
        <div className="bg-white d-flex justify-content-between rounded mt-3 ml-3 mr-3">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  <div className="d-flex">
                    Type
                    <div>
                      <img src={updownIcon} alt="Logo" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Account Name
                    <div>
                      <img src={updownIcon} alt="Logo" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Phone No/Bank A.C
                    <div>
                      <img src={updownIcon} alt="Logo" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Received Money
                    <div>
                      <img src={updownIcon} alt="Logo" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Status
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Created At
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex">
                    Action
                    <div>
                      <img src={updownIcon} alt="" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                depositMethodHistory ?
                  depositMethodHistory.map((data) => {
                    return (
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img scr={Bkash} alt="" />
                            <div>{data.depositOption}</div>
                          </div>
                        </td>
                        <td>{data.depositInstruction}</td>
                        <td>+88 {data.accountNo}</td>
                        <td>৳12000.00</td>
                        <td>Active</td>
                        <td> {new Date(data.createdOn).getDate()}/
                          {new Date(data.createdOn).getMonth()}/
                          {new Date(data.createdOn).getFullYear()}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <img src={setting} alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item className="dropdown" onClick={() => edit(data.id)}> Edit</Dropdown.Item >
                              <Dropdown.Item className="dropdown">
                                <b>Make Active</b>
                              </Dropdown.Item>

                              <Dropdown.Item href="#/action-3" className="dropdown" onClick={() => userDelete(data.id)}>
                                Remove
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    )
                  }) : ""
              }
            </tbody>
          </Table>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default DepositMethodHistory;
