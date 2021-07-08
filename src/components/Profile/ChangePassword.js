import React from "react";
import { useForm } from "react-hook-form";
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="top-text p-1 p-lg-3">
        <h2>Password Change</h2>
        <span className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a
          assumenda saepe. Adipisci id doloribus quaerat reprehenderit rerum
          alias atque iste accusamus reiciendis!
        </span>
      </div>
      <div className="p-lg-4 mt-3 mt-lg-0">
        <div className="input-field p-lg-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="CurrentPassword">Current Password</label>
            <input
              type="password"
              className="form-control"
              cols="100"
              defaultValue=""
              {...register("CurrentPassword")}
            />
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("newPassword", { required: true })}
                />
                {errors.newPassword && (
                  <small className="text-danger">*required</small>
                )}
                <br />
              </div>

              <div className="col-lg-6">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">*required</small>
                )}
                <br />
              </div>
            </div>
            <button type="submit" className="btn-brand mt-2 border-0 py-2 px-5">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
