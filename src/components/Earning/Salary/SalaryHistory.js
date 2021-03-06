import React from "react";
import updownIcon from "../../../image/icons/updown_icon.svg";
import { Table } from "react-bootstrap";
const SalaryHistory = () => {
  return (
    <div className="bg-white mt-2 ml-2 p-3 m-3 table-responsive">
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
            <th scope="row">৳1000</th>
            <td>pending</td>
            <td>15-August-2021</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SalaryHistory;
