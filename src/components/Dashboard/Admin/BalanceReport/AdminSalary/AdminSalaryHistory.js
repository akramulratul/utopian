import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import setting from "../../../../../image/settings.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { salariesHistoryAction,salaryApproved ,salaryDecline} from "../../../../Redux/Actions/incentiveAction";

const AdminSalaryHistory = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const salaries = useSelector(state => state.salariesHistory)
  const { loading, salaryInfo } = salaries
  console.log(salaryInfo)
  const [isLoading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(salariesHistoryAction())
    stopLoading();
  }, [])

  const approveHandler = (id) => {
    const data = {
      id: id,
      status: "Approved",
    };
    console.log(data)
    dispatch(salaryApproved(data));
  };

  const declineHandler = (id) => {
    const data = {
      id: id,
      status: "Rejected",
    };
    // console.log(data)
    dispatch(salaryDecline(data));
  };

  return (
    <div className="bg-white mt-2 ml-2 p-3 m-3">
      <Table
        striped
        bordered
        hover
        responsive="xl lg md sm"
        className="table table-striped table-hover"
      >
        <thead>
          <tr>
            <th>User Id</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          isLoading ? (<p>Loading...</p>) : loading ? (<p>Loading...</p>) : (
            <tbody>
              {
                salaryInfo.data.map(data => {
                  return (
                    <tr>
                      <td>{data.username}</td>
                      <td>{data.status}</td>
                      <td>{data.amount}</td>
                      <td>
                        {new Date(data.createdOn).getDate()}/
                        {new Date(data.createdOn).getMonth()}/
                        {new Date(data.createdOn).getFullYear()}
                      </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic">
                            <img src={setting} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className="dropdown">
                              {/* <!-- Button trigger modal --> */}
                              {/* Vertically centered scrollable modal */}
                              <div variant="primary" onClick={handleShow}>
                                View details
                              </div>
                              {show && (
                                <Modal show={show} onHide={handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Incentive Withdraw List</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Table responsive>
                                      <thead>
                                        <tr>
                                          <th>User Id</th>
                                          <th>Status</th>
                                          <th>Amount</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>admin_chaeck</td>
                                          <td>Pending </td>
                                          <td>10000 </td>
                                          <td>10-AUG-2021 </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                      Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                      Save Changes
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              )}
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown"  onClick={() => approveHandler(data.id)}>
                              <b>accept</b>
                            </Dropdown.Item>

                            <Dropdown.Item className="dropdown " onClick={() => declineHandler(data.id)}>
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
          )
        }

      </Table>
    </div>
  );
};

export default AdminSalaryHistory;
