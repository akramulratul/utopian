import React from "react";
import IMG1 from "../../../image/IMG.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch } from "react-redux";
import { forgetPasswordByPhoneNumber } from "../../Redux/Actions/forgetPasswordAction";
import { useState } from "react";
import { load } from "dotenv";

const ForgetPassword = () => {
    //for phone number
    const [phoneNumber, setPhoneNumber] = React.useState();
    const history = useHistory()
    const dispatch = useDispatch()

    const {
        formState: { errors },
        handleSubmit,
    } = useForm({});
    //loading
    const [loading, setLoading] = useState(false)

    const onSubmit = (data, e) => {
        if (phoneNumber) {
            const forgetData = {
                phoneNo: phoneNumber,
            };
            sessionStorage.setItem("ForgetData", JSON.stringify(forgetData));
            dispatch(forgetPasswordByPhoneNumber(forgetData, history))
            // history.push('/verify-otp')
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 20000);



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
        e.preventDefault();
    };

    // const handleLoading = () => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000);
    // }

    return (
        <div>
            <div className="login-form-container">
                <div className="login-form mt-5">
                    <div className="text-center">
                        <div className="space">
                            <h2 className="welcome-header">
                                <span className="uto-pain">Uto</span>
                                <span className="pain">Pian</span>
                                <br />
                                <span className="welcome">Welcome Back</span>
                            </h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="select-wrapper input-field">
                                    <PhoneInput
                                        international
                                        defaultCountry="BD"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        name="phone"
                                    />
                                </div>
                                <button type="submit" name="submit" className="button login" disabled={loading}>
                                    {loading ? <div class="spinner-border spinner-border-sm" role="status" style={{ width: "2rem", height: "2rem" }}>
                                        <span class="visually-hidden"></span>
                                    </div> : "Forget Password"}

                                </button>
                            </form>
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
                <ToastContainer />
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;
