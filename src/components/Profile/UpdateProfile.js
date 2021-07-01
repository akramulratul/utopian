import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const UpdateProfile = () => {
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = { ...data, country, region };
    console.log(data);
  };

  //

  return (
    <div className="p-1 p-lg-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-row row">
          <div className="col-lg-6">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span className="text-danger">*</span>}
            <br />
          </div>

          <div className="col-lg-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span className="text-danger">*</span>}
          </div>
        </div>

        <div className="email-phone row">
          <div className="col-lg-6">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-danger">*</span>}
            <br />
          </div>

          <div className="col-lg-6">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control"
              {...register("phone", { required: true })}
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
            defaultValue=""
            {...register("about")}
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            cols="100"
            defaultValue=""
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
