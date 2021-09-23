import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import OTPInput, { ResendOTP } from "otp-input-react";
import frame from "../../../../image/Frame.svg";
import { useDispatch } from "react-redux";
import { incentiveSendOtp,incentiveAddWithdraw } from "../../../Redux/Actions/incentiveWithdrawAction";

const InConfirmOtp = () => {
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();

  const confirmClicked = () => {
    const withdrawInfo = JSON.parse(sessionStorage.getItem("incentiveWithdraw"));
    const newWithdrawInfo = {
      withdrawMethod: withdrawInfo.method,
      amount: parseInt(withdrawInfo.Amount),
      contactNo: withdrawInfo.number,
      otp: parseInt(otp),
      // withdrawType: "TotalIncome"
    };
    // console.log(newWithdrawInfo)
    dispatch(incentiveAddWithdraw(newWithdrawInfo,withdrawInfo.withdrawType));
  };

  const evenHandler = (e) => {
    setOtp(e);
  };
  return (
    <div class="">
      <div class="row d-flex">
        <div class="col mt-5">
          <img
            style={{ width: "100%" }}
            className="rounded mx-auto d-block"
            src={frame}
            alt=""
          />
        </div>
        <div class="border-left col mt-5 ml-5">
          <h4>Confirm OTP</h4>
          <small>Enter OTP we just sent to your phone number.</small>
          <br />
          <div>
            {" "}
            <OTPInput
              value={otp}
              autoFocus
              onChange={(e) => evenHandler(e)}
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
            <ResendOTP className="btn-brand py-2 my-2" 
              onResendClick={() => dispatch(incentiveSendOtp())}
            />
          </div>

          <div>
            <button type="button" 
            className="btn btn-primary btn-change"
            onClick={confirmClicked}
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

export default InConfirmOtp;
