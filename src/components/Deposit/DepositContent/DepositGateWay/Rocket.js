import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDepositMethodAction } from "../../../Redux/Actions/depositeAction";


const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const depositHistory = useSelector((state) => state.depositMethodHistory);
  const { loading, error, depositMethodHistory } = depositHistory;
  console.log(depositMethodHistory);

  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };

  useEffect(() => {
    dispatch(getUserDepositMethodAction());
    stopLoading();
  }, [dispatch]);

  // const roc = depositHistory && depositHistory.filter(data => { return data.depositOption === "Rocket" })
  // console.log(roc);


  return (
    <div>
      <h3>Deposit details</h3>
      <p>Please cashout on this number</p>
      <h4>01618338733-3</h4>
    </div>
  );
};

export default Rocket;
