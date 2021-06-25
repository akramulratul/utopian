import React, { useState } from "react";
import "../../../../styles/_Withdraw.scss";

import {
  Card,
  Form,
  Button,
  
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ConfirmWithdrawal = ({setAmount}) => {


  const changeHandler = (e)=>{
    setAmount(e.target.value);

  }
  
  return (
    <div>
      <div className="row container m-2 ">
        <div className="col-lg-6 container border border-light">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Withdrawal Amount (৳)</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="string" placeholder="Give Amount" onChange={changeHandler} />
                    <br />
                    <Link to="/otp">
                      <Button
                        className="btn-confirmWithdrawal"
                        variant="success"
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
          <h1>৳2100.96</h1>
          <div>Available balance after Withdraw</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmWithdrawal;
