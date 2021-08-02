import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import updownIcon from "../../../image/icons/updown_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { incentiveHistoryAction } from "../../Redux/Actions/incentiveAction";
const IncentiveHistory = () => {
  const incentiveData = useSelector(state => state.incentiveHistory)
  // const {error,loading,}
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(incentiveHistoryAction())

  }, [])

  return (
    <div className="bg-white mt-2 ml-2 p-3 m-3">
      <Table striped bordered hover>
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
            {/* <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td> */}
          </tr>
        </tbody>

      </Table>
    </div>
  );
};

export default IncentiveHistory;
