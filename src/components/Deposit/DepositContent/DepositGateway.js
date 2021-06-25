import React from "react";
import { useState } from "react";
import MobileBanking from "../../Dashboard/Withdraw/PaymentMethod/MobileBanking";
import DepositBanking from "./DepositGateWay/DepositBanking";
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
          {isBkashChecked && <DepositBanking />}
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
          {isNagadChecked && <DepositBanking />}
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
          {isRocketChecked && <DepositBanking />}
        </div>
      </form>
    </div>
  );
};

export default DepositGateway;
