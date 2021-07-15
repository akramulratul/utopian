import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useDispatch } from "react-redux";
import {
  userProfileUpdate,
  userProfileUpdateByPictureAction,
} from "../Redux/Actions/userAction";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";

const UpdateProfile = ({ userInfo }) => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  //
  const [image, setImage] = useState("");
  console.log(image);
  const [url, setUrl] = useState();
  console.log("url", url);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "iypf1xxa");
    data.append("cloud_name", "utopiansglobal");
    console.log(image);
    if (image) {
      fetch("https://api.cloudinary.com/v1_1/utopiansglobal/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUrl(data.url);
          dispatch(userProfileUpdateByPictureAction(data.url));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updatePhoto = (file) => {
    setImage(file);
  };

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
          <div className="col-lg-6" disabled="true">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              {...register("email", { required: true })}
              value={userInfo.email}
            />
            {errors.email && <span className="text-danger">*</span>}
            <br />
          </div>

          <div className="col-lg-6" disabled="true">
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

        {/* <div class="mb-3">
          <label for="formFile" class="form-label">Picture</label>
          <input class="form-control" type="file"
            accept="image/png, image/jpg, image/jpeg, image/pdf"
            name="pictures"
            mode="append"
            id="formFile"
            onChange={(e) => updatePhoto(e.target.files[0])}
            onBlur={() => postDetails()}
          />
        </div> */}

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
      <div>
        <div class="mb-3">
          <label for="formFile" class="form-label mt-3">
            Picture
          </label>
          <input
            class="form-control"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/pdf"
            name="pictures"
            mode="append"
            id="formFile"
            onChange={(e) => updatePhoto(e.target.files[0])}
          />
        </div>
        <Button
          className="btn-update border-0 py-2 px-5 mt-3"
          onClick={() => postDetails()}
        >
          Profile Update
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
