import React from "react";
import DepositGateway from "./DepositGateway";
const DepositRight = ({ setMethod }) => {
  return (
    <div className="bg-white col-lg-6 p-0 shadow-sm p-3 mb-5 bg-body rounded">
      <div className="m-4">
        <h3 className="text-start">
          <b>Available Payment Method</b>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          expedita esse minus?
        </p>
      </div>
      <div>
        <DepositGateway setMethod={setMethod} />
      </div>
    </div>
  );
};

export default DepositRight;
