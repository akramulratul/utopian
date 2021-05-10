import React, { useContext } from 'react';
import './Login.scss'
import IMG1 from '../../image/IMG.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);

    // auth-redirect
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };   // jey components theke asci oi components e pataiya dive 

    const onSubmit = (data) => {
        console.log(data);
        const userInfo = {
            email: data.email,
            password: data.password
        }
        console.log(userInfo);
        fetch('https://utopain-backend-test.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // {
                //     data.token ? history.push('/Profile') : alert(data.massage + " plz sign up fast")
                // }
                setLoggedInUser(data)
                localStorage.setItem('token', JSON.stringify(data))
                history.replace(from);
            });

    }
    React.useEffect(() => {
        const data = localStorage.getItem('token')
        if (data) {
            setLoggedInUser(JSON.parse(data))
        }
        console.log(data);
        console.log("test");
        console.log(loggedInUser);

    }, [])
    console.log(loggedInUser);


    return (
        <div>
            <div className="login-form-container">
                <div className="login-form mt-5">
                    <div className="text-center">
                        <div className='space'>
                            <h2 className="welcome-header">
                                <span className="uto-pain">Uto</span><span className="pain">Pain</span>
                                <br /><span className="welcome">Welcome Back</span>
                            </h2>
                        </div>
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="input-field" {...register("email", { required: true })} name="email" placeholder="Email/Username" required />

                                <input className="input-field" type="password" {...register("password", { required: true })} name="password" id="" placeholder="Password" required />

                                {
                                    loggedInUser && <p className="text-danger">{loggedInUser.massage}</p>
                                }
                                <div className="checkbox-forget">
                                    <div>
                                        <input type="checkbox" id="newUser" required />
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
            </div>
        </div>
    );
};

export default Login;