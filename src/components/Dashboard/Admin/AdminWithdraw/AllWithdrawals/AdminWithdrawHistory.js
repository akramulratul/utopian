import React from "react";
import { useState } from "react";
import updownIcon from "../../../../../image/icons/updown_icon.svg";
import setting from "../../../../../image/icons/settings.svg";
const AdminWithdrawHistory = () => {
  const [withdrawData, setWithdrawData] = useState([]);
  return (
    <div>
      <div className="mt-3 bg-white p-3 m-3 rounded">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">
                <div className="d-flex">
                  Name{" "}
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
                  Status{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Created At{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">Action </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {withdrawData.map(() => {
              return (
                <tr>
                  <td>Name</td>
                  <td>Txn</td>
                  <td>Amount</td>
                  <td>Status</td>
                  <td>time</td>
                  <td>
                    <img src={setting} alt="" />
                    Image 3 dropdown approve,decline,Details
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWithdrawHistory;
