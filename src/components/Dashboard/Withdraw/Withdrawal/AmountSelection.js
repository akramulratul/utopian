import React from "react";
import "../../../../styles/_Withdraw.scss";
import NumberCheck from "./NumberCheck";
const AmountSelection = () => {
  return (
    <div className="for-background border">
      <div className="border border-light">
        <div className="col-lg-9 p-0">
          <NumberCheck />
        </div>
      </div>
    </div>
  );
};

export default AmountSelection;
