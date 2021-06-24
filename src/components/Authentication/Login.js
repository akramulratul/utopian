import React, { useEffect } from 'react';
import './Login.scss'
import IMG1 from '../../image/IMG.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/userAction';
// import jwt_decode from "jwt-decode";

const Login = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const dispatch = useDispatch()
    //show and hide password
    const [showPassword, setShowPassword] = React.useState(false)
    const showPasswordHandle = () => {
        setShowPassword(!showPassword)
        console.log(showPassword);
    }
    //click input field thn hidden icon show 
    const [iconHide1, setIconHide1] = React.useState(false)
    const hideIcon1 = () => {
        setIconHide1(true)
        console.log(iconHide1);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        setTimeout(() => {
            if (userInfo) {
                if (userInfo.statusCode === 200) {
                    history.push(redirect)
                    console.log(userInfo);
                }
            }
        }, 2000);

    }, [history, userInfo, redirect])
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        dispatch(login(data.username, data.password))
        console.log(userInfo);

        // if (userInfo.statusCode === 200) {
        //     setTimeout(() => {
        //         history.replace(from);
        //     }, 2000);

        // }
    }
    return (
        <div>
            <div className="login-form-container">
                <div className="login-form mt-5">
                    <div className="text-center">
                        <div className='space'>
                            <h2 className="welcome-header">
                                <span className="uto-pain">Uto</span><span className="pain">Pian</span>
                                <br /><span className="welcome">Welcome Back</span>
                            </h2>
                        </div>
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="input-field" {...register("username", { required: true })} name="username" placeholder="username" required />
                                <div className="password-box">
                                    <input
                                        className="password-field input-first-name"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
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

                                    {
                                        iconHide1 ? showPassword ? <FontAwesomeIcon icon={faEye} onClick={showPasswordHandle} /> : <FontAwesomeIcon icon={faEyeSlash} onClick={showPasswordHandle} /> : ""

                                    }
                                </div>
                                <div className="checkbox-forget">
                                    <div>
                                        <input type="checkbox" id="newUser" />
                                        <label className="px-2" for="newUser">Keep Me Login</label>
                                    </div>
                                    <div>
                                        <Link className="forget-password">Forget password?</Link>
                                    </div>
                                </div>
                                <button type="submit" name="submit" className="button login">Login</button>
                            </form>
                            {/* <div className="">
                            <p className="social-media-caption">Or Log In With Social Media</p>
                            <button className="facebook-btn button">
                                <span className="px-2">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                                Login with Facebook
                            </button>
                            <button className="google button">
                                <span className="px-2"><i className="fab fa-google"></i></span> Login
                                with Google
                            </button>
                        </div> */}
                        </div>
                    </div>
                    <img src={IMG1} className="bg" alt="description" />
                </div>

                <div className="register-container">
                    <div className="caption">
                        <h3>New Here?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                            deserunt <br />temporibus magni
                        </p>
                        <Link to="/registration"><button>Register</button></Link>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;