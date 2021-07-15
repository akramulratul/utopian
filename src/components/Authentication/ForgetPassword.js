import React from "react";
import "./Login.scss";
import IMG1 from "../../image/IMG.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-number-input";

const ForgetPassword = () => {
  //for phone number
  const [phoneNumber, setPhoneNumber] = React.useState();

  const {
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = (data, e) => {
    if (phoneNumber) {
      const forgetData = {
        phoneNumber: phoneNumber,
      };
      console.log(forgetData);
      // fetch('https://utopain-backend.herokuapp.com/auth/signIn', {
      //     method: 'POST',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(resetData)
      // })
      //     .then(res => res.json())
      //     .then(data => {

      //         if (data.statusCode !== 200) {
      //             toast.error(`${data.message}`, {
      //                 position: "top-right",
      //                 autoClose: 2000,
      //                 hideProgressBar: false,
      //                 closeOnClick: true,
      //                 pauseOnHover: true,
      //                 draggable: true,
      //                 progress: undefined,
      //             });
      //         } else {
      //             toast.success(`${data.message}`, {
      //                 position: "top-right",
      //                 autoClose: 2000,
      //                 hideProgressBar: false,
      //                 closeOnClick: true,
      //                 pauseOnHover: true,
      //                 draggable: true,
      //                 progress: undefined,
      //             });
      //         }
      //         // });
      //         console.log(data);

      //         // if (data.statusCode === 200) {
      //         //     localStorage.setItem('userInfo', JSON.stringify(data))
      //         // }
      //     })
      // e.preventDefault();
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
  };

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
                <button type="submit" name="submit" className="button login">
                  Forget Password
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
