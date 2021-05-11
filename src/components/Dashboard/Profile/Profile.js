import React from 'react';
import Sidebar from '../../shared/Sidebar/Sidebar';
import './Profile.css'
import Ellipse from '../../../images/Ellipse.png'
import Navbar from '../../shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
const Profile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (

        <section>
            <Navbar />
            <div className="row">
                <Sidebar />
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src={Ellipse} alt="Maxwell Admin" />
                                        </div>
                                        <h5 className="user-name">Ellipse</h5>
                                        <h6 className="user-email">Ellipse@gmail.com</h6>
                                    </div>
                                    {/* <div className="about">
                                        <h5>About</h5>
                                        <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human
                                    experiences.</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-body">
                            <form className="row gutters" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h3 className="mb-2 text-primary">Personal Details</h3>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <input type="number" {...register("phone", { required: true })} name="phone" placeholder="Phone" className="form-control" />
                                        {errors.phone && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" {...register("address", { required: true })} name="address" placeholder="Address" className="form-control" />
                                        {errors.address && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text">
                                            <button type="button" id="submit" name="submit"
                                                className="btn btn-secondary m-2" >Cancel</button>
                                            <button type="submit" id="submit" name="submit"
                                                className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;