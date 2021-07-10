import React, { useState } from 'react';
import IMG1 from "../../../image/IMG.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { confirmPasswordAction } from '../../Redux/Actions/forgetPasswordAction';
import { useRef } from 'react';

const PasswordChange = () => {
    const dispatch = useDispatch();

    //show and hide password
    const [showPassword, setShowPassword] = React.useState(false);
    const showPasswordHandle = () => {
        setShowPassword(!showPassword);
        console.log(showPassword);
    };
    //click input field thn hidden icon show
    const [iconHide1, setIconHide1] = React.useState(false);
    const hideIcon1 = () => {
        setIconHide1(true);
        console.log(iconHide1);
    };


    //showConfirmPassword
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const showConfirmPasswordHandle = () => {
        setShowConfirmPassword(!showConfirmPassword);
        // console.log(showConfirmPassword);
    };
    const [iconHide2, setIconHide2] = React.useState(false);
    const hideIcon2 = () => {
        setIconHide2(true);
        console.log(iconHide2);
    };


    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm({});
    //password matching && react hook form
    const password = useRef({});
    password.current = watch("password", "");

    let history = useHistory();

    //loading
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {
        if (sessionStorage.getItem("ForgetDataInfo")) {
            const { phoneNo, otp } = JSON.parse(sessionStorage.getItem("ForgetDataInfo"));
            const otp1 = parseInt(otp)
            if (otp.lengt === "" || phoneNo === "" || otp === undefined) {
                toast.error("please add all the fields", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                const confirmDataInfo = {
                    phoneNo,
                    otp: otp1,
                    newPassword: data.password
                };
                console.log(confirmDataInfo);
                dispatch(confirmPasswordAction(confirmDataInfo, history))
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                }, 20000);
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
        // console.log(data);


    }


    return (
        <>
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

                                <div className="password-box">
                                    <input
                                        className="password-field input-first-name"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters",
                                            },
                                        })}
                                        placeholder="newPassword"
                                        onClick={hideIcon1}
                                    />

                                    {iconHide1 ? (
                                        showPassword ? (
                                            <FontAwesomeIcon
                                                icon={faEye}
                                                onClick={showPasswordHandle}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faEyeSlash}
                                                onClick={showPasswordHandle}
                                            />
                                        )
                                    ) : (
                                        ""
                                    )}

                                </div>
                                <p className="text-muted" style={{ fontSize: "12px" }}>
                                    Your password must be between 8 and 30 characters
                                </p>
                                {errors.password_repeat && (
                                    <p className="error-message">
                                        {errors.password_repeat.message}
                                    </p>
                                )}

                                <div className="password-box">
                                    <input
                                        className="password-field"
                                        name="password_repeat"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="confirm password"
                                        {...register("password_repeat", {
                                            required: true,
                                            validate: (value) =>
                                                value === password.current ||
                                                "The passwords do not match",
                                        })}
                                        onClick={hideIcon2}
                                    />
                                    {iconHide2 ? (
                                        showConfirmPassword ? (
                                            <FontAwesomeIcon
                                                icon={faEye}
                                                onClick={showConfirmPasswordHandle}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faEyeSlash}
                                                onClick={showConfirmPasswordHandle}
                                            />
                                        )
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {errors.password_repeat && (
                                    <p className="error-message">
                                        {errors.password_repeat.message}
                                    </p>
                                )}

                                {/* <button type="submit" name="submit" className="button login">
                                    Change Password
                                </button> */}

                                <button type="submit" name="submit" className="button login" disabled={loading}>
                                    {loading ? <div class="spinner-border spinner-border-sm" role="status" style={{ width: "2rem", height: "2rem" }}>
                                        <span class="visually-hidden"></span>
                                    </div> : "Change Password"}

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
                {/* <ToastContainer /> */}
            </div>
            <ToastContainer />
        </>
    );
};

export default PasswordChange;