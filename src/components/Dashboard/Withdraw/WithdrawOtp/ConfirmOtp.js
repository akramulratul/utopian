import React from "react";

import frame from "../../../../image/Frame.svg";
import OTPInput, { ResendOTP } from "otp-input-react";
const ConfirmOtp = ({ setOtp }) => {
  const evenhandler = (e) => {};
  return (
    <div class="container">
      <div class="row d-flex">
        <div class="col mt-5">
          <img className="rounded mx-auto d-block" src={frame} alt="" />
        </div>
        <div class="border-left col mt-5 ml-5">
          <h4>Confirm OTP</h4>
          <small>Enter OTP we just sent to your phone number.</small>
          <br />
          <div>
            {" "}
            <OTPInput
              value={evenhandler}
              onChange={evenhandler}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              secure
            />
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
          </div>

          <div>
            <button type="button" className="btn btn-primary btn-change">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOtp;
