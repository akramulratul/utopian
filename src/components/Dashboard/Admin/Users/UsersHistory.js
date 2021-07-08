import React from "react";
import { Table } from "react-bootstrap";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import { Dropdown } from "react-bootstrap";
import setting from "../../../../image/settings.svg";
const UsersHistory = () => {
  return (
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
          <tr>
            <td>Regina Cooper</td>
            <td>admin@email.com</td>
            <td>Level One</td>
            <td>Active</td>
            <td>10m ago</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <img src={setting} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown">
                    <b>View Details</b>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown">
                    <b>Suspend</b>
                  </Dropdown.Item>

                  <Dropdown.Item className="dropdown">Deposits</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="dropdown">
                    Withdrawals
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

export default UsersHistory;
