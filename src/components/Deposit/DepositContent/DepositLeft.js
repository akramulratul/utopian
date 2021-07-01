import React from "react";
import SelectCountry from "../../Dashboard/Withdraw/PaymentMethod/SelectCountry";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeposit } from "../../Redux/Actions/depositeAction";
const DepositLeft = ({ data, setDepositeData, method }) => {
  const [transection, setTransection] = useState();
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();
  const [intError, setIntError] = useState("");

  const dispatch = useDispatch();
  const addDeposite = useSelector((state) => state.addDeposite);
  const { loading, error, depositeInfo } = addDeposite;
  const tansectionHandler = (e) => {
    console.log(e.target.value);
    setTransection(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };

  const depositeData = {
    transectionId: transection,
    depositAmount: amount,
    sentFrom: mobile,
  };

  const onSubmit = (e) => {
    setDepositeData(depositeData);
    if (
      data.depositAmount &&
      data.paidBy &&
      data.sendFrom &&
      data.transactionId
    ) {
      if (data.depositAmount >= 1000) {
        dispatch(addDeposit(data));
        setIntError("");
      } else {
        setIntError("Deposit Must Be Greater than 999TK");
      }
    } else {
      setIntError("Please fill up all required Data");
    }
    e.preventDefault();
  };

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
            <b>Selected Payment Method: {method}</b>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <Form>
          <div className="mt-5 mb-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>Give Your transaction ID</h4>
              </Form.Label>
            </Form.Group>
            <Form.Control
              className="Deposit-bg"
              size="lg"
              type="text"
              placeholder="Trans ID"
              onChange={tansectionHandler}
            />
          </div>

          <div className="mt-5 mb-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>Mobile Number</h4>
              </Form.Label>
            </Form.Group>
            <Form.Control
              className="Deposit-bg"
              size="lg"
              type="text"
              placeholder="Mobile Number"
              onChange={mobileHandler}
            />
          </div>

          <div className="mt-5 mb-5">
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
              onChange={amountHandler}
            />
            {intError !== "" && (
              <p className="text-danger pt-4">
                <b>**{intError}</b>
              </p>
            )}

            <div className="mt-4">
              <Button
                type="submit"
                onSubmit={onSubmit}
                onClick={onSubmit}
                className="btn-next"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
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
