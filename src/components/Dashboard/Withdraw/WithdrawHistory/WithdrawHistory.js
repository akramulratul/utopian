import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updownIcon from "../../../../image/icons/updown_icon.svg";
import { getWithdrawHistory } from "../../../Redux/Actions/withdrawAction";
const WithdrawHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const withdrawHistory = useSelector((state) => state.withdrawHistory);
  const { loading, error, withdrawInfo } = withdrawHistory;
  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getWithdrawHistory());
    stopLoading();
  }, [dispatch]);
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
                Date{" "}
                <div>
                  <img src={updownIcon} alt="" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <p>Loading Data...</p>
          ) : loading ? (
            <p>Loading Data...</p>
          ) : (
            withdrawInfo.map((info) => {
              return (
                <tr>
                  <td>{info.withdrawMethod}</td>
                  <td>{info.contactNo}</td>
                  <td
                    className={
                      (info.status === "Pending" && "bg-warning text-white") ||
                      (info.status === "Approved" && "bg-success text-white") ||
                      (info.status === "Rejected" && "bg-danger text-white")
                    }
                  >
                    <b>{info.status}</b>
                  </td>
                  <td>BDT {info.amount}/-</td>
                  <td>
                    {new Date(info.createdOn).getDate()} /
                    {new Date(info.createdOn).getMonth()} /
                    {new Date(info.createdOn).getFullYear()}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawHistory;
