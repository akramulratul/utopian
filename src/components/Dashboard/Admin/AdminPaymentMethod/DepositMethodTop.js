import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersTop = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
    console.log(isClicked);
    console.log(setIsClicked);
  };
  return (
    <div className="bg-white d-flex justify-content-between rounded mt-3 ml-3 mr-3">
      <div className="left-content d-flex align-items-center ">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="/admin/dashboard">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Deposit Method
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex  align-items-center justify-content-between m-3 p-2 border-left">
        <div className="px-3">
          <h4>05</h4>
          <small>Total Payment Method</small>
        </div>
        <div className="px-3 d-flex justify-content-between">
          <div className="px-3">
            {isClicked ? (
              <Link to="/admin/depositmethod">
                <Button
                  className="withdraw-btn btn btn-brand w-100 py-2 mt-2"
                  onClick={buttonClicked}
                >
                  <p>List</p>
                </Button>
              </Link>
            ) : (
              <Link to="/admin/addnew">
                <Button
                  className="withdraw-btn btn btn-brand w-100 py-2 mt-2"
                  onClick={buttonClicked}
                >
                  <p>Add New</p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTop;
