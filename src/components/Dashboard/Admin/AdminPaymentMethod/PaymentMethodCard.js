import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { depositMethodAction } from "../../../Redux/Actions/adminDepositMethodAction";
import { toast, ToastContainer } from "react-toastify";

const PaymentMethodCard = () => {
  const { control, handleSubmit, register } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data, e) => {
    const depositOption = {
      accountNo: data.agentNumber,
      depositInstruction: data.agentName,
      depositOption: data.paymentMethod.value
    }
    if (data.agentNumber.length === 11) {
      dispatch(depositMethodAction(depositOption))
    } else {
      toast.error("Please Give the Proper Number", {
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
    <div className="bg-white mt-3 ml-3 mr-3">
      <div className="Form">
        <div className="text-center">
          <h3>Add Payment Method</h3>
          <small>Please Select the payment method for your deposit panel</small>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Bkash", label: "Bkash" },
                    { value: "Nagad", label: "Nagad" },
                    { value: "Rocket", label: "Rocket" },
                  ]}
                />
              )}
            />
            <div className="mt-3">
              <div>
                <input
                  className="input-field"
                  {...register("agentName", { required: true })}
                  type="text"
                  name="agentName"
                  id=""
                  placeholder="Agent Name / Account Holder Name"
                  required
                />
              </div>
              <div>
                <input
                  className="input-field"
                  {...register("agentNumber", { required: true })}
                  type="text"
                  name="agentNumber"
                  id=""
                  placeholder="Agent Phone Number"
                  required
                />
              </div>
            </div>
            <button className="pt-2 btn btn-brand w-100 py-2 mt-4" type="submit">Add</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentMethodCard;
