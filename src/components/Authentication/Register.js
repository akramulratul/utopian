import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import IMG from "../../image/IMG.png";
import "./Register.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterOtpVerifyAction } from "../Redux/Actions/userAction";

const Registration = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();
  const { referralId } = useParams();

  const history = useHistory();
  let location = useLocation();
  //show and hide password
  const [showPassword, setShowPassword] = React.useState(false);
  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const showConfirmPasswordHandle = () => {
    setShowConfirmPassword(!showConfirmPassword);
    // console.log(showConfirmPassword);
  };

  //click input field thn hidden icon show
  const [iconHide1, setIconHide1] = React.useState(false);
  const hideIcon1 = () => {
    setIconHide1(true);
    console.log(iconHide1);
  };
  const [iconHide2, setIconHide2] = React.useState(false);
  const hideIcon2 = () => {
    setIconHide2(true);
    console.log(iconHide2);
  };

  //for phone number
  const [phoneNumber, setPhoneNumber] = React.useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});
  //password matching && react hook form
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    if (userInfo) {
      if (userInfo.statusCode === 201) {
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      } else {
        setTimeout(() => {
          history.push("/registration");
        }, 2000);
      }
    }
  }, [history]);

  const [loader, setLoader] = useState(false)



  const onSubmit = async (data, e) => {
    console.log(data);
    const fullName = data.first_name + " " + data.last_name;
    const userData = {
      name: fullName,
      email: data.email,
      userName: data.username,
      referralId: data.referralId,
      phoneNo: phoneNumber,
      password: data.password,
    };

    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 40000);
    sessionStorage.setItem("verifyData", JSON.stringify(userData));
    const phone = {
      phoneNo: phoneNumber
    }

    dispatch(userRegisterOtpVerifyAction(phone, history));
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="text-center">
          <div>
            <h2 className="welcome-header">
              <span className="uto-pain">Uto</span>
              <span className="pain">Pian</span>
              <br />
              Create An Account
            </h2>
          </div>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-first-last-name">
                <input
                  className="input-field input-first-name"
                  {...register("first_name", { required: true })}
                  type="text"
                  name="first_name"
                  id=""
                  placeholder="First Name"
                  required
                />
                <input
                  className="input-field"
                  {...register("last_name", { required: true })}
                  type="text"
                  name="last_name"
                  id=""
                  placeholder="Last Name"
                />
              </div>

              <input
                className="input-field"
                type="email"
                {...register("email", { required: true })}
                name="email"
                id=""
                placeholder="Email"
              />
              <input
                className="input-field"
                type="text"
                {...register("username", { required: true })}
                name="username"
                id=""
                placeholder="Username"
              />

              <input
                className="input-field"
                type="text"
                {...register("referralId", { required: false })}
                name="referralId"
                id=""
                defaultValue={referralId ? referralId : ""}
                placeholder="Referral Id"
              />

              <div className="select-wrapper input-field">
                <PhoneInput
                  international
                  defaultCountry="BD"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  name="phone"
                />
              </div>
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
                  placeholder="Password"
                  onClick={hideIcon1}
                />
                {/* 
                                    iconHide1 => click input field thn hidden icon show 
                                    showPassword => showPassword is true show faEye icon otherwise show faEyeSlash
                                
                                */}
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

              <div className="checkbox-forget">
                <div>
                  <input type="checkbox" id="newUser" required />
                  <label for="newUser" className="px-2">
                    Accepts all terms and condition
                  </label>
                </div>
              </div>
              {/* <button type="submit" className="button register">
                Register
              </button> */}
              <button type="submit" name="submit" className="button login" disabled={loader}>
                {loader ? <div class="spinner-border spinner-border-sm" role="status" style={{ width: "2rem", height: "2rem" }}>
                  <span class="visually-hidden"></span>
                </div> : "Register"}

              </button>
            </form>
            {/* <div class="">
                            <p class="social-media-caption">Or Log In With Social Media</p>
                            <button class="facebook-btn button">
                                <span class="px-2">
                                    <i class="fab fa-facebook-f"></i>
                                </span>
                            Login with Facebook
                            	</button>
                            <button class="google button">
                                <span class="px-2"><i class="fab fa-google"></i></span> Login
                                    with Google
                            </button>
                        </div> */}
          </div>
        </div>
        <img src={IMG} className="bg" alt="description" />
      </div>

      <div className="register-container">
        <div className="caption">
          <h3>Have an Account?</h3>
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
  );
};

export default Registration;
