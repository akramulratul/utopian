import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import setting from "../../../../image/settings.svg";
import { incentiveHistoryAction, adminIncentiveApproved, adminIncentiveDecline } from "../../../Redux/Actions/incentiveAction";
const AdminIncentiveHistory = () => {
  const incentiveData = useSelector(state => state.incentiveHistory)
  console.log(incentiveData)
  const { loading, incentiveInfo } = incentiveData
  console.log(incentiveInfo)
  const dispatch = useDispatch()

  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };
  useEffect(() => {
    dispatch(incentiveHistoryAction())
    stopLoading();
  }, [])

  const approveHandler = (id) => {
    const data = {
      id: id,
      status: "Approved",
    };
    console.log(data)
    dispatch(adminIncentiveApproved(data));
  };

  const declineHandler = (id) => {
    const data = {
      id: id,
      status: "Rejected",
    };
    console.log(data)
    dispatch(adminIncentiveDecline(data));
  };

  return (
    <>
      <div className="bg-white mt-2 ml-2 p-3 m-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {isloading ? (
            <p>Loading...</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (

            <tbody>
              {
                incentiveInfo.data.map(data => {
                  return (

                    <tr>
                      <td>{data.username}</td>
                      <td>{data.status}</td>
                      <td>{data.amount}</td>
                      <td>12-12-2121</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic">
                            <img src={setting} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className="dropdown" onClick={() => approveHandler(data.id)}>
                              <b>Approve</b>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown" onClick={() => declineHandler(data.id)}>
                              <b>Decline</b>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>

                  )
                })
              }
            </tbody>

          )}
        </Table>
      </div>
    </>
  );
};

export default AdminIncentiveHistory;
