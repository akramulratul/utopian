import React from "react";
import SelectCountry from "../../Dashboard/Withdraw/PaymentMethod/SelectCountry";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const DepositLeft = ({SetAmount,SetTrnsNumber}) => {
  const evenhandler=(e)=>{
    SetAmount(e.target.value)
    SetTrnsNumber(e.target.value)
      }
  

  return (
    // <div className="row mr-0 d-flex mr-2 ml-2 pb-2 ">

    <div className="bg-white col-lg-6 p-0 shadow-sm p-3 mb-5 bg-body rounded">
      <div className="m-4">
        <h2 className="text-start">
          <b>Select Country</b>
        </h2>
        <div className="Deposit-bg">
          <SelectCountry />
        </div>
        <div className="mt-5 mb-5">
          <h3>
            <b>Selected Payment Method: Bkash</b>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="mt-5 mb-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >
                <h4>Give Your transection Number</h4>
              </Form.Label>
            </Form.Group>
            <Form.Control
              className="Deposit-bg"
              size="lg"
              type="text"
              placeholder="Trans ID"
              onChange={evenhandler}
            />
          </Form>
        </div>
        <div className="mt-5 mb-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>
                  <b>Deposit Amount (৳)</b>
                </h4>
              </Form.Label>
            </Form.Group>
            <Form.Control
              className="Deposit-bg"
              size="lg"
              type="text"
              placeholder="Give Your Amount"
              onChange={evenhandler}
            />
          </Form>
          <div className="mt-4">
            <Button className="btn-next">Submit</Button>
          </div>
        </div>
      </div>
    </div>
    /* <div className="bg-white col-lg-6 p-0 border-left">
        <div className="shadow-sm p-3 mb-5 bg-body rounded">
          <div className="m-4">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              perferendis.
            </h1>
          </div>
        </div>
      </div> */
    // </div>
  );
};

export default DepositLeft;
