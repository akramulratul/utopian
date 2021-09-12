import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const SalaryTop = () => {
  return (
    <div className="header pt-3 mt-3 mr-3 ml-3 bg-white ">
      <div className="row d-flex align-items-center justify-content-around">
        <div className="col-lg-4 col-md-2 col-sm-1 d-flex align-items-center justify-content-start">
          <Breadcrumb className="bg-white">
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-1  border-left">
          <div className="col-lg-6 col-md-6 col-sm-6  d-flex align-items-center justify-content-end">
            <h2>৳00.00</h2>
            <small>Current Salary</small>{" "}
          </div>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-1 px-3 ">
          <Button className="withdraw-btn ml-5 d-flex d-flex align-items-center justify-content-end">
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
    // <div className="header bg-white mt-3 mr-3 ml-3 d-flex justify-content-between rounded">
    //   <div className="left-content d-flex align-items-center ">
    //     <div className="pt-2">
    //       <nav aria-label="breadcrumb">
    //         <ol class="breadcrumb bg-white">
    //           <li class="breadcrumb-item">
    //             <a href="#">Dashboard</a>
    //           </li>
    //           <li class="breadcrumb-item active" aria-current="page">
    //             Incentive
    //           </li>
    //         </ol>
    //       </nav>
    //     </div>
    //   </div>
    //   <div className="right-content d-flex align-items-center m-3 p-2 border-left">
    //     <div className="px-3">
    //       <h2>৳00.00</h2>
    //       <small>Current Incentive Balance</small>
    //     </div>
    //     <div className="px-3 d-grid d-flex align-items-center justify-content-end">
    //       <Button className="withdraw-btn ml-5">
    //         <Link to="/dashboard">
    //           <p>Dashboard</p>
    //         </Link>
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SalaryTop;
