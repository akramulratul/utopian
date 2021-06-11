import React from "react";
import { useState } from "react";
import updownIcon from "../../../../image/icons/updown_icon.svg";
const WithdrawHistory = () => {
  const [withdrawData, setWithdrawData] = useState([]);

  return (
    <div className="mt-3 bg-white p-3 m-3 rounded">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">
              <div className="d-flex">
                Payment Method{" "}
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
            <th scope="col">Status</th>
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
          {withdrawData.map((withdrawInfo) => {
            return (
              <tr>
                <td>BKash</td>
                <td>txn-8F254TRCFDS</td>
                <td>complete</td>
                <td>BDT 5000/-</td>
                <td>10m ago</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawHistory;
