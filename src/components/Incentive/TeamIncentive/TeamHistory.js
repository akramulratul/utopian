import React from "react";
import { Table } from "react-bootstrap";

import updownIcon from "../../../image/icons/updown_icon.svg";
const IncentiveHistory = () => {
  return (
    <div className="bg-white mt-2 ml-2 p-3 m-3">
      <div className="table-responsive">
        <Table
          striped
          bordered
          hover
          className="table table-hover"
          responsive="sm md lg xl"
        >
          <thead>
            <tr>
              <th className="d-flex">
                Amount
                <div>
                  <img src={updownIcon} alt="" />
                </div>
              </th>
              <th>Status</th>
              <th className="d-flex">
                Date
                <div>
                  <img src={updownIcon} alt="" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default IncentiveHistory;
