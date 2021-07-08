import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useDispatch } from "react-redux";
import { userProfileUpdate } from "../Redux/Actions/userAction";

const UpdateProfile = ({ userInfo }) => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const [region, setRegion] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = { ...data, country, region };
    const userData = {
      address: data.address,
      district: data.region,
      email: data.email,
      name: data.name,
      phoneNo: data.phone,
      thana: data.about,
    };
    dispatch(userProfileUpdate(userData));
    console.log(userData);
  };

  //

  return (
    <div className="p-1 p-lg-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-row row">
          <div className="col-lg-12">
            <label htmlFor="name">Name</label>
            <input
              defaultValue={userInfo.name}
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.firstName && <span className="text-danger">*</span>}
            <br />
          </div>

          {/* <div className="col-lg-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span className="text-danger">*</span>}
          </div> */}
        </div>

        <div className="email-phone row">
          <div className="col-lg-6">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              {...register("email", { required: true })}
              value={userInfo.email}
            />
            {errors.email && <span className="text-danger">*</span>}
            <br />
          </div>

          <div className="col-lg-6">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control"
              {...register("phone", { required: true })}
              value={userInfo.phoneNo}
            />
            {errors.phone && <span className="text-danger">*</span>}
            <br />
          </div>
        </div>
        <div className="about">
          <label htmlFor="about">About</label>
          <textarea
            className="form-control"
            cols="100"
            defaultValue={userInfo.thana}
            {...register("about")}
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            cols="100"
            defaultValue={userInfo.address}
            {...register("address")}
          />
        </div>

        <div className="name-row mt-2 row">
          <div className="col-lg-6">
            <label htmlFor="address">Country</label>
            <CountryDropdown
              className="form-control"
              value={country}
              onChange={(val) => setCountry(val)}
            />
          </div>

          <div className="col-lg-6">
            <label htmlFor="address">Region</label>
            <RegionDropdown
              className="form-control"
              country={country}
              value={region}
              defaultValue={userInfo.district}
              onChange={(val) => setRegion(val)}
            />
          </div>
        </div>

        <button className="btn-brand border-0 py-2 px-5 mt-3" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
