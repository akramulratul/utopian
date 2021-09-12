import React, { useState, useEffect } from "react";
import updownIcon from "../../../../image/icons/updown_icon.svg";
const IncentiveWithdrawHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const stopLoading = () => {
    setIsLoading(false);
  };

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
                Number{" "}
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
                Payment{" "}
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
          return (
          <tr>
            <td>78</td>
            <td>01457744445</td>
            <td>
              <b>Success</b>
            </td>
            <td>BDT 10000/-</td>
            <td>BDT 9080/-</td>
            <td>15-Aug-2021</td>
          </tr>
          );
        </tbody>
      </table>
    </div>
  );
};

export default IncentiveWithdrawHistory;
