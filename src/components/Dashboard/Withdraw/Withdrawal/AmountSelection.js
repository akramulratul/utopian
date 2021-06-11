import React from "react";
import "../../../../styles/_Withdraw.scss";
import { Form, Button, Card, NavLink } from "react-bootstrap";
import NumberCheck from "./NumberCheck";
const AmountSelection = () => {
  return (
    <div className="block-example">
      <br />
      <div className="container block-example border border-light">
        <Card border="primary" style={{ width: "65rem" }}>
          <Card.Body>
            <Card.Title>
              <NumberCheck />
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AmountSelection;
