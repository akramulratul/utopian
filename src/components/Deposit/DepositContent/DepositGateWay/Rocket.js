import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDepositMethodAction } from "../../../Redux/Actions/depositeAction";


const Rocket = ({ rocket }) => {
  // console.log(rocket);
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

  const test = isloading ? undefined : loading ? undefined : depositMethodHistory.find(function (data) {
    return data.depositOption == rocket
  });
  console.log(test)
  // var filtered = depositMethodHistory?.filter(function (data) {
  //   return data.depositOption === "Rocket"
  // });



  return (
    <div>
      {
        test && <div>
          <h3>Deposit details</h3>
          <p>Please cashout on this number</p>
          <h4>{test.accountNo}</h4>
        </div>
      }
    </div>
  );
};

export default Rocket;
