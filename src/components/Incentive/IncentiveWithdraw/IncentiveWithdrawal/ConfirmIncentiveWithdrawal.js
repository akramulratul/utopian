import React from "react";
import "../../../../styles/_Withdraw.scss";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incentiveSendOtp } from "../../../Redux/Actions/incentiveWithdrawAction";


const ConfirmIncentiveWithdrawal = ({ setAmount, setWithdrawType }) => {
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(incentiveSendOtp());
  };
  const handleWithdrawType = (e) => {
    // console.log(e.target.value)
    setWithdrawType(e.target.value)
  }
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
                    <Form.Control type="string"
                      className="mb-2"
                      placeholder="Give Amount"
                      onChange={changeHandler}

                    />
                    {/* <br /> */}
                    <Form.Label>Select withdrawType : </Form.Label>
                    <Form.Control
                      className="mb-2"
                      as="select"
                      custom
                      onChange={handleWithdrawType}
                    >
                      <option selected>Select withdrawType  </option>
                      <option value="TotalIncome">Total Income</option>
                      <option value="IncentiveIncome">Incentive Income</option>
                    </Form.Control>
                    <br />

                    <Link to="/dashboard/incentive/otp">
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
          <h1>৳00</h1>
          <div>Available balance after Withdraw Incentive</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmIncentiveWithdrawal;
