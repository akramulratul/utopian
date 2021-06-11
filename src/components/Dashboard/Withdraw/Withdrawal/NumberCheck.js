import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../styles/_Withdraw.scss";

const NumberCheck = (props) => {
  const [isClicked, SetIsClicked] = useState(false);
  const buttonClicked = () => {
    SetIsClicked(!isClicked);
  };
  return (
    // <div className="container block-example border border-light">

    <Row className="d-flex for-background pt-4">
      <Col className="text-md-start mt-3">Payment Method:Bkash</Col>
      <Col md="auto">
        <small>Bkash Number</small>
        <h4>01780192178</h4>
      </Col>
      <Col xs lg="2">
        <Link to="/payment-method">
          <Button
            onClicked={buttonClicked}
            variant="primary"
            className="btn-change "
          >
            <h5 className="text-center">Change</h5>
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default NumberCheck;
