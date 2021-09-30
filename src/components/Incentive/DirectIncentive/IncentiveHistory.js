import React, { useState } from "react";
import { Table } from "react-bootstrap";
import updownIcon from "../../../image/icons/updown_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { incentiveBalanceReportHistory } from "../../Redux/Actions/balanceReportAction";
const IncentiveHistory = () => {
  const incentiveData = useSelector((state) => state.incentiveBalanceReportHistory);
  const { error, loading, balanceReportInfo } = incentiveData
  console.log(balanceReportInfo)

  const [isLoading, setIsLoading] = useState(true);
  const stopLoading = () => {
    setIsLoading(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(incentiveBalanceReportHistory());
    stopLoading()
  }, []);

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
            {/* <th>Statuss</th> */}
            <th>Transaction Type</th>
            <th className="d-flex">
              Date
              <div>
                <img src={updownIcon} alt="" />
              </div>
            </th>
            <th>Balance Type</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <p>Loading Data...</p>
          ) : loading ? (
            <p>Loading Data...</p>
          ) : (
            balanceReportInfo.data.map(info => {
              return (
                <tr>
                  <th scope="row">৳{info.amount}</th>
                  <td>{info.transactionType}</td>
                  <td>
                    {new Date(info.createdOn).getDate()}/
                    {new Date(info.createdOn).getMonth()}/
                    {new Date(info.createdOn).getFullYear()}
                  </td>
                  <td>{info.balanceType}</td>
                </tr>
              )
            })
          )}
          {/* <tr>
            <th scope="row">৳1000</th>
            <td>pending</td>
            <td>15-August-2021</td>
            <td>pending</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default IncentiveHistory;
