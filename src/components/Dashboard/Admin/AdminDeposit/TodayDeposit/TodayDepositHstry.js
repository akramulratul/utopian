import React from "react";
import { useState } from "react";
import updownIcon from "../../../../../image/icons/updown on table.svg";
import setting from "../../../../../image/icons/settings.svg";

const TodayDepositHstry = () => {
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
                <div className="d-flex">Status </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Date{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div className="d-flex">
                  Action{" "}
                  <div>
                    <img src={updownIcon} alt="" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {withdrawData.map(() => {
              return (
                <tr>
                  <td>Name</td>
                  <td>txn</td>
                  <td>Amount</td>
                  <td>Status</td>
                  <td>Created At</td>
                  <td>
                    <img src={setting} alt="" />3 piece dropdown
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

export default TodayDepositHstry;
