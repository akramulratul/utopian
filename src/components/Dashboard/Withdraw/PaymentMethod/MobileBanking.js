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

const MobileBanking = ({ setNumber }) => {
  const [selectedNumber, setSelectedNumber] = useState('')
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    setIsClicked(true);

  };
  const changeHandler = (e) => {
    setSelectedNumber((e.target.value).toString())

  }
  setNumber(selectedNumber);
  return (
    <Card className="witdraw-background">
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h3>Give Your Number</h3>
            <p>Lorem ipsum amet consectetur adipisicing elit.</p>
            <Form.Control type="string" onChange={changeHandler} placeholder="Enter your number" />
            <Form.Text className="text-muted">
              We'll never share your number with anyone else.
            </Form.Text>
          </Form.Group>
          <Link to="/withdrawal">
            <Button className="btn-next" onClick={buttonClicked} type="submit">
              Next
            </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
    // ["Secondary"].map((variant, idx) =>
    // bg={variant.toLowerCase()}
    //     key={idx}
    //     text={variant.toLowerCase() === "light" ? "dark" : "white"}
    //     style={{ width: "3rem" }}
    //     className="mb-2"
  );
};

export default MobileBanking;
