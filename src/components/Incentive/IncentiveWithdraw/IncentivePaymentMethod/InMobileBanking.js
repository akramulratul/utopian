import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import "../../../../styles/_Withdraw.scss";

const InMobileBanking = ({ setNumber }) => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    setIsClicked(true);
  };
  const changeHandler = (e) => {
    setSelectedNumber(e.target.value.toString());
    setNumber(e.target.value);
  };
  return (
    <Card className="witdraw-background">
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h3>Give Your Number</h3>
            <p>Lorem ipsum amet consectetur adipisicing elit.</p>
            <Form.Control
              type="string"
              onChange={changeHandler}
              placeholder="Enter your number"
            />
            <Form.Text className="text-muted">
              We'll never share your number with anyone else.
            </Form.Text>
          </Form.Group>
          <Link to="/dashboard/incentiveWithdrawal">
            <Button className="btn-next" onClick={buttonClicked} type="submit">
              Next
            </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default InMobileBanking;
