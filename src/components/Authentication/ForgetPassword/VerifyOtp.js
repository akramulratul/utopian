import React from 'react';
import IMG1 from "../../../image/IMG.png";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { forgetPasswordByVerifyOtp } from '../../Redux/Actions/forgetPasswordAction';


const VerifyOtp = () => {
    const [otp, setOtp] = useState();
    const history = useHistory()
    const dispatch = useDispatch()
    const {
        formState: { errors },
        handleSubmit,
    } = useForm({});

    const evenhandler = (e) => {
        setOtp(e);
    };

    //loading
    const [loading, setLoading] = useState(false)
    const onSubmit = () => {
        const otp1 = parseInt(otp)
        if (sessionStorage.getItem("ForgetData")) {

            if (otp1) {
                const { phoneNo } = JSON.parse(sessionStorage.getItem("ForgetData"));
                const ForgetDataInfo = {
                    phoneNo,
                    otp: otp1,
                };
                console.log(ForgetDataInfo);
                sessionStorage.setItem("ForgetDataInfo", JSON.stringify(ForgetDataInfo));
                dispatch(forgetPasswordByVerifyOtp(ForgetDataInfo, history))
                // history.push('/confirm-password')
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            } else {
                toast.error("please add all the fields", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        } else {
            toast.error("please add all the fields", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }



    return (
        <div>
            <div className="login-form-container">
                <div className="login-form mt-5">
                    <div className="text-center">
                        {/* <div className="space">
                            <h2 className="welcome-header">
                                <span className="uto-pain">Uto</span>
                                <span className="pain">Pian</span>
                                <br />
                                <span className="welcome">Welcome Back</span>
                            </h2>
                        </div> */}
                        <div>

                            <div class="col mt-5 ml-5">
                                <h4>Confirm OTP</h4>
                                <small>Enter OTP we just sent to your phone number.</small>
                                <br />

                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                        {/* <ResendOTP
                                            className="btn-brand py-2 my-2"
                                            onResendClick={() => dispatch(sendOtp())}
                                        /> */}
                                    </div>
                                    {/* <button type="submit" name="submit" className="button login">
                                        Verify Otp
                                    </button> */}
                                    <button type="submit" name="submit" className="button login" disabled={loading}>
                                        {loading ? <div class="spinner-border spinner-border-sm" role="status" style={{ width: "2rem", height: "2rem" }}>
                                            <span class="visually-hidden"></span>
                                        </div> : "Verify Otp"}

                                    </button>

                                </form>

                                {/* <div>
                                    <button
                                        type="button"
                                        onClick={confirmClicked}
                                        className="btn btn-primary btn-change"
                                    >
                                        Confirm
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <img src={IMG1} className="bg" alt="description" />
                </div>

                <div className="register-container">
                    <div className="caption">
                        <h3>New Here?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                            deserunt <br />
                            temporibus magni
                        </p>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
                {/* <ToastContainer /> */}
            </div>
            <ToastContainer />
        </div>
    );
};

export default VerifyOtp;