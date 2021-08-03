import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TopAdminSalary = () => {
  return (
    <div className="header bg-white mt-3 mr-3 ml-3 d-flex justify-content-between rounded">
      <div className="left-content d-flex align-items-center ">
        <div className="pt-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="/admin/dashboard">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Salary
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex align-items-center m-3 p-2 border-left">
        <div className="px-3">
          <h2>৳2100.96</h2>
          <small>Total Salary Given</small>
        </div>
        <div className="px-3">
          <Button className="withdraw-btn ml-5">
            <Link to="/admin/dashboard">
              <p>Salary</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopAdminSalary;
