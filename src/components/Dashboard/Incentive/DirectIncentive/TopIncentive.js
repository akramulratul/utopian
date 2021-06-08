import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../styles/_incentive.scss";
const TopIncentive = () => {
  return (
    <div class="container d-flex row">
      <div class="col">
        <h3>Dashboard/Incentive</h3>
      </div>
      <div class="col-md-auto">
        <h3>৳2100.96</h3>
        <small>Current Incentive Balance</small>
      </div>
      <div class="col col-lg-2 incentive-btn">
        <Link to="/dashboard">
          <Button>Incentive Balance</Button>
        </Link>
      </div>
    </div>
  );
};

export default TopIncentive;
