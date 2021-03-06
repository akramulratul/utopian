import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDepositMethodAction } from "../../Redux/Actions/depositeAction";
import DepositBanking from "./DepositGateWay/DepositBanking";
import Nagad from "./DepositGateWay/Nagad";
import Rocket from "./DepositGateWay/Rocket";
const DepositGateway = ({ setMethod }) => {
  const [value, setValue] = useState("");
  const [isBkashChecked, setIsBkashChecked] = useState(false);
  const [isNagadChecked, setIsNagadChecked] = useState(false);
  const [isRocketChecked, setIsRocketChecked] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "bkash") {
      setIsBkashChecked(true);
      setIsNagadChecked(false);
      setIsRocketChecked(false);
    } else if (e.target.value === "nagad") {
      setIsNagadChecked(true);
      setIsBkashChecked(false);
      setIsRocketChecked(false);
    } else if (e.target.value === "rocket") {
      setIsRocketChecked(true);
      setIsBkashChecked(false);
      setIsNagadChecked(false);
    } else {
      setIsRocketChecked(false);
      setIsBkashChecked(false);
      setIsNagadChecked(false);
    }
  };
  setMethod(value);

  // const dispatch = useDispatch();
  // const depositHistory = useSelector((state) => state.depositMethodHistory);
  // const { loading, error, depositMethodHistory } = depositHistory;
  // console.log(depositMethodHistory);

  // const [isloading, setIsloading] = useState(true);
  // const stopLoading = () => {
  //   setIsloading(false);
  // };

  // useEffect(() => {
  //   dispatch(getUserDepositMethodAction());
  //   stopLoading();
  // }, [dispatch]);

  return (
    <div className="Container pl-5">
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="bkash"
              checked={value === "bkash"}
              onClick={onChange}
            />
            B-kash
          </label>
          <br />
          {isBkashChecked && <DepositBanking bkash={"Bkash"} />}
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="nagad"
              checked={value === "nagad"}
              onClick={onChange}
            />
            Nagad
          </label>
          <br />
          {isNagadChecked && <Nagad nagad={"Nagad"} />}
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="rocket"
              checked={value === "rocket"}
              onClick={onChange}
            />
            Rocket
          </label>
          <br />
          {isRocketChecked && <Rocket rocket={"Rocket"} />}
        </div>
      </form>
    </div>
  );
};

export default DepositGateway;
