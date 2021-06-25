import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updownIcon from "../../image/icons/updown on table.svg";
import { getDepositeHistory } from "../Redux/Actions/depositeAction";
const DepositHistory = () => {
  const [isloading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  const depositHistory = useSelector((state) => state.depositHistory);
  const { loading, error, depositInfo } = depositHistory;

  const stopLoading = () => {
    setIsloading(false);
  };

  useEffect(() => {
    dispatch(getDepositeHistory());
    stopLoading();
  }, [dispatch]);

  return (
    <>
      {isloading ? (
        <p>Loading...</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
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
              {depositInfo.data.map((deposite) => {
                return (
                  <tr>
                    <td>{deposite.transactionId}</td>
                    <td>{deposite.status}</td>
                    <td>৳{deposite.depositAmount}</td>
                    <td>10m ago</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DepositHistory;
