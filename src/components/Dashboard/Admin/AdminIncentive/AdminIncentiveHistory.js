import React from "react";
import { Table } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import setting from "../../../../image/settings.svg";
const AdminIncentiveHistory = () => {
  return (
    <div className="bg-white mt-2 ml-2 p-3 m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Regina cuper</td>
            <td>Pending</td>
            <td>1000</td>
            <td>12-12-2121</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <img src={setting} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown">
                    <b>Approve</b>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown">
                    <b>Decline</b>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminIncentiveHistory;
