import React from "react";
import { useState } from "react";
import updownIcon from "../../image/icons/updown on table.svg";
const DepositHistory = () => {
  const [depositData, setDepositData] = useState([]);
  return (
    <div className="bg-white  rounded p-3 mr-2 ml-2">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">
              <div className="d-flex">
                TXN Id{" "}
                <div>
                  <img src={updownIcon} alt="" />
                </div>
              </div>
            </th>
            <th scope="col">
              <div>Status </div>
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
                Date{" "}
                <div>
                  <img src={updownIcon} alt="" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {depositData.map((withdrawInfo) => {
            return (
              <tr>
                <td>txn-8F254TRCFDS</td>
                <td>completed</td>
                <td>৳1000.00</td>
                <td>10m ago</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DepositHistory;
