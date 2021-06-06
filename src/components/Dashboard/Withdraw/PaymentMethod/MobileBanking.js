import React, { useState } from "react";
import "../../../../styles/_Withdraw.scss";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Card,
  FormGroup,
  FormControl,
  ControlLabel,
  NavLink,
} from "react-bootstrap";

const MobileBanking = (e) => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    setIsClicked(true);
  };
  return ["Secondary"].map((variant, idx) => (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "32rem" }}
      className="mb-2"
    >
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h3>Give Your Number</h3>
            <p>Lorem ipsum amet consectetur adipisicing elit.</p>
            <Form.Control type="string" placeholder="Enter your number" />
            <Form.Text className="text-muted">
              We'll never share your number with anyone else.
            </Form.Text>
          </Form.Group>
          <Link to="/withdrawal">
            <Button
              className="btn-next"
              onClick={buttonClicked}
              variant="primary"
              type="submit"
            >
              Next
            </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  ));
};

export default MobileBanking;
