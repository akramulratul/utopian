import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../styles/_Withdraw.scss";

const NumberCheck = (props) => {
  const [isClicked, SetIsClicked] = useState(false);
  const buttonClicked = () => {
    SetIsClicked(!isClicked);
  };
  const withdrawinfo = JSON.parse(sessionStorage.getItem("Withdrawal"));

  return (
    <div className=" d-flex justify-content-between rounded mt-3 ml-4 mr-4 border">
      <div className="left-content d-flex align-items-center">
        {withdrawinfo && <p>Payment Method: {withdrawinfo.method || ""}</p>}
      </div>
      <div className="right-content d-flex  align-items-center  border-left">
        <div className="px-3 ">
          <small>
            {withdrawinfo && <span>{withdrawinfo.method || ""}</span>} Number
          </small>
          {withdrawinfo && <h4>{withdrawinfo.number || ""}</h4>}
        </div>
        <div className="align-items-end">
          <Link to="/payment-method">
            <Button
              onClicked={buttonClicked}
              variant="primary"
              className="btn-change"
            >
              <h5 className="text-center">Change</h5>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NumberCheck;
