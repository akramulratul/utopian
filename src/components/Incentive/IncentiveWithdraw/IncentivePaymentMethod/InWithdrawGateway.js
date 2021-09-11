import React from "react";
import { useState } from "react";
import "../../../../styles/_Withdraw.scss";
import InMobileBanking from "./InMobileBanking";
const InWithdrawGateway = ({ setPaymentMethod, setNumber }) => {
  const [value, setValue] = useState("");
  const [isBkashChecked, setIsBkashChecked] = useState(false);
  const [isNagadChecked, setIsNagadChecked] = useState(false);
  const [isRocketChecked, setIsRocketChecked] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setPaymentMethod(e.target.value);
    if (e.target.value === "Bkash") {
      setIsBkashChecked(true);
      setIsNagadChecked(false);
      setIsRocketChecked(false);
    } else if (e.target.value === "Nagad") {
      setIsNagadChecked(true);
      setIsBkashChecked(false);
      setIsRocketChecked(false);
    } else if (e.target.value === "Rocket") {
      setIsRocketChecked(true);
      setIsBkashChecked(false);
      setIsNagadChecked(false);
    } else {
      setIsRocketChecked(false);
      setIsBkashChecked(false);
      setIsNagadChecked(false);
    }
  };
  return (
    <div className="Container border-left pl-5">
      <div>
        <h2 className="text-center">Select Payment Method</h2>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ab!
        </p>
      </div>

      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Bkash"
              checked={value === "Bkash"}
              onClick={onChange}
            />
            B-kash
          </label>
          <br />
          {isBkashChecked && <InMobileBanking setNumber={setNumber} />}
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Nagad"
              checked={value === "Nagad"}
              onClick={onChange}
            />
            Nagad
          </label>
          <br />
          {isNagadChecked && <InMobileBanking setNumber={setNumber} />}
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Rocket"
              checked={value === "Rocket"}
              onClick={onChange}
            />
            Rocket
          </label>
          <br />
          {isRocketChecked && <InMobileBanking setNumber={setNumber} />}
        </div>
      </form>
    </div>
  );
};

export default InWithdrawGateway;
