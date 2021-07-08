import React, { useEffect, useState } from "react";
import "../../../../styles/_Withdraw.scss";

import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWithdraw } from "../../../Redux/Actions/withdrawAction";
import { useSelector } from "react-redux";
import { sendOtp } from "../../../Redux/Actions/withdrawAction";

const ConfirmWithdrawal = ({ setAmount }) => {
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dispatch = useDispatch();
  const getProfile = useSelector((state) => state.getProfile);
  const { userInfo } = getProfile;

  const handleSubmit = () => {
    dispatch(sendOtp());
  };

  return (
    <div>
      <div className="row p-1">
        <div className="col-lg-6 container border border-light pl-2">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Withdrawal Amount ( ৳ )</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="string"
                      placeholder="Give Amount"
                      onChange={changeHandler}
                    />
                    <br />
                    <Link to="/otp">
                      <Button
                        className="btn-confirmWithdrawal"
                        variant="success"
                        onClick={handleSubmit}
                      >
                        Confirm Withdraw
                      </Button>{" "}
                    </Link>
                  </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 border border-light text-center mt-5">
          <h1>৳{(userInfo && userInfo.incomeTotal) || 0}</h1>
          <div>Available balance after Withdraw</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmWithdrawal;
