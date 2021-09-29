import React, { useEffect, useState } from "react";
import "../../../../styles/_Withdraw.scss";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incentiveSendOtp } from "../../../Redux/Actions/incentiveWithdrawAction";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from 'react-router'
import { getUserProfile } from "../../../Redux/Actions/userAction";



const ConfirmIncentiveWithdrawal = ({ setAmount, setWithdrawType }) => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [isHistory, setisHistory] = useState({});

  const stopLoading = () => {
    setisLoading(false);
  };
  useEffect(() => {
    dispatch(getUserProfile());
    stopLoading();
  }, [dispatch]);
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, error, userInfo } = getProfile;

  //Get session storage data 
  const { method, number, Amount, withdrawType } = JSON.parse(sessionStorage.getItem("incentiveWithdraw"));


  const changeHandler = (e) => {
    setisHistory(e.target.value)
    setAmount(e.target.value);
  };
  const changeBlur = (e) => {

    if (e.target.value >= userInfo.totalIncome && e.target.value >= userInfo.incentiveIncome) {
      // toast.error("Withdraw Value Not Available", {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      alert("Withdraw Value Not Available");
      window.location.reload(true)

    }

  }


  const handleSubmit = () => {
    if (withdrawType == "" || Amount== "") {
      alert("Please Select Withdrawal type");
      window.location.reload(true)


    } else {
      dispatch(incentiveSendOtp());

    }
  };

  const handleWithdrawType = (e) => {
    setWithdrawType(e.target.value)
  }


  return (
    <div>
      <div className="row p-1">
        <div className="col-lg-6 container border border-light pl-2">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Withdrawal Amount ( ৳ )</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="string"
                      className="mb-2"
                      placeholder="Give Amount"
                      onChange={changeHandler}
                      onBlur={changeBlur}

                    />

                    <Form.Label>Select withdrawType : </Form.Label>
                    <Form.Control
                      className="mb-2"
                      as="select"
                      custom
                      onChange={handleWithdrawType}
                    >
                      <option selected>Select withdrawType  </option>
                      <option value="TotalIncome">Total Income</option>
                      <option value="IncentiveIncome">Incentive Income</option>
                    </Form.Control>

                    <Link to="/dashboard/incentive/otp">
                      <Button
                        className="btn-confirmWithdrawal"
                        variant="success"
                        onClick={handleSubmit}
                      >
                        Confirm Withdraw
                      </Button>{" "}
                    </Link>
                  </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 border border-light text-center mt-5">
          {
            (withdrawType == "IncentiveIncome") ? <h1>৳{(userInfo && userInfo.incentiveIncome - Amount) || "00"}</h1> : <h1>৳{(userInfo && userInfo.totalIncome - Amount) || "00"}</h1>
          }

          <div>Available balance after Withdraw </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfirmIncentiveWithdrawal;
