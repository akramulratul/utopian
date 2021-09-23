import React from "react";
import "../../../../styles/_Withdraw.scss";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConfirmIncentiveWithdrawal = () => {
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
                    <Form.Control type="string" placeholder="Give Amount" />
                    <br />
                    <Link to="/dashboard/incentive/otp">
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
          <h1>৳00</h1>
          <div>Available balance after Withdraw Incentive</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmIncentiveWithdrawal;
