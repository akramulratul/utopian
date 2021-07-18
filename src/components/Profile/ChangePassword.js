import React, { useRef,useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { changePassword } from '../Redux/Actions/userAction';
import { ToastContainer, toast } from "react-toastify";

const ChangePassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    //password matching && react hook form
    const password = useRef({});
    password.current = watch("password", "");
    const dispatch = useDispatch()
    const onSubmit = (data, e) => {

        console.log(data);
        const confirmPass = {

            newPass: data.password,
            oldPass: data.CurrentPassword,
        }
        console.log(confirmPass);
        dispatch(changePassword(confirmPass))
        e.target.reset()
    }
    return (
        <div>
            <div className="top-text p-1 p-lg-3">
                <h2>Password Change</h2>
                <span className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a assumenda saepe. Adipisci id doloribus quaerat reprehenderit rerum alias atque iste accusamus reiciendis!</span>
            </div>
            <div className='p-lg-4 mt-3 mt-lg-0'>
                <div className="input-field p-lg-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="CurrentPassword">Current Password</label>
                        <input type='password' className='form-control' cols='100'
                            defaultValue="" {...register("CurrentPassword")}
                        />

                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <label htmlFor="newPassword">New Password</label>
                                {/* <input type='password' className='form-control' {...register("newPassword", { required: true })} />
                                 */}

                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters",
                                        },
                                    })}
                                    placeholder="Password"

                                />

                                {/* {errors.newPassword && <small className='text-danger'>*required</small>}<br /> */}
                                {errors.password_repeat && <p className="error-message">{errors.password_repeat.message}</p>} <br />
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                {/* <input type='password' className='form-control' {...register("confirmPassword", { required: true })} /> */}


                                <input
                                    className="form-control"
                                    name="password_repeat"
                                    type="password"
                                    placeholder="confirm password"
                                    {...register("password_repeat", {
                                        required: true,
                                        validate: (value) =>
                                            value === password.current || "The passwords do not match",
                                    })}
                                />

                                {/* {errors.confirmPassword && <small className='text-danger'>*required</small>}<br /> */}
                                {errors.password_repeat && <p className="error-message">{errors.password_repeat.message}</p>} <br />                            </div>
                        </div>
                        <button type='submit' className='btn-brand mt-2 border-0 py-2 px-5'>Change Password</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChangePassword;