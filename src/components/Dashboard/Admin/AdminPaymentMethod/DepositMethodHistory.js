import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import setting from "../../../../image/settings.svg";
import Bkash from "../../../../image/icons/B-kash.svg";
const DepositMethodHistory = () => {
  return (
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
          <tr>
            <td>
              <div className="d-flex">
                <img scr={Bkash} alt="" />
                <div>B-kash</div>
              </div>
            </td>
            <td>Utopian Nagad Agent</td>
            <td>+880162323444</td>
            <td>৳12000.00</td>
            <td>Active</td>
            <td>Time</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={setting} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown">
                    <b>Edit</b>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown">
                    <b>Make Active</b>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-3" className="dropdown">
                    Remove
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

export default DepositMethodHistory;
