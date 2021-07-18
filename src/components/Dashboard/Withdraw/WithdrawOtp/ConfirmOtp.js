import React, { useState } from "react";

import frame from "../../../../image/Frame.svg";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch } from "react-redux";
import { addWithdraw, sendOtp } from "../../../Redux/Actions/withdrawAction";
import { ToastContainer } from "react-toastify";
const ConfirmOtp = () => {
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();

  const confirmClicked = () => {
    const withdrawInfo = JSON.parse(sessionStorage.getItem("Withdrawal"));
    const newWithdrawInfo = {
      withdrawMethod: withdrawInfo.method,
      amount: parseInt(withdrawInfo.Amount),
      contactNo: withdrawInfo.number,
      otp: otp,
    };
    dispatch(addWithdraw(newWithdrawInfo));
  };

  const evenhandler = (e) => {
    setOtp(e);
  };
  return (
    <div class="">
      <div class="row d-flex">
        <div class="col mt-5">
          <img style={{width: '100%'}} className="rounded mx-auto d-block" src={frame} alt="" />
        </div>
        <div class="border-left col mt-5 ml-5">
          <h4>Confirm OTP</h4>
          <small>Enter OTP we just sent to your phone number.</small>
          <br />
          <div>
            {" "}
            <OTPInput
              value={otp}
              onChange={(e) => evenhandler(e)}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
            <ResendOTP
              className="btn-brand py-2 my-2"
              onResendClick={() => dispatch(sendOtp())}
            />
          </div>

          <div>
            <button
              type="button"
              onClick={confirmClicked}
              className="btn btn-primary btn-change"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfirmOtp;
