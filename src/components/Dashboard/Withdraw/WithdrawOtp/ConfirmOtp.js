import React from "react";
import { Form, Col, a } from "react-bootstrap";
import frame from "../../../../image/Frame.svg";

const ConfirmOtp = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col mt-5">
          <img className="rounded mx-auto d-block" src={frame} alt="" />
        </div>
        <div class="container col mt-5 ml-5">
          <h4>Confirm OTP</h4>
          <small>Enter OTP we just sent to your phone number.</small>
          <br />
          <div className="container pl-1 m-1 d-flex justify-content-start">
            <div className="otpBox p-2">
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="0" />
                  </Col>
                </Form.Row>
              </Form>
            </div>
            <div className="otpBox p-2">
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="0" />
                  </Col>
                </Form.Row>
              </Form>
            </div>
            <div className="otpBox p-2">
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="0" />
                  </Col>
                </Form.Row>
              </Form>
            </div>
            <div className="otpBox p-2">
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="0" />
                  </Col>
                </Form.Row>
              </Form>
            </div>
          </div>
          <div className="d-flex align-item-around">
            <small className="m-2">Time remaining :1.38sec</small>
            <button type="button" className="btn btn-link ml-4 pb-5">
              Resent
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-change">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOtp;
