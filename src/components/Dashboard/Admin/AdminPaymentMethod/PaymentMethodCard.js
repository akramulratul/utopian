import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const PaymentMethodCard = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              name="Payment Method"
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
                <Form.Control
                  type="Agent Name"
                  placeholder="Account Holder Name / Agent Name"
                />
              </div>
              <div>
                <Form.Control
                  type="Number"
                  placeholder="Account Number / Phone Number"
                />
              </div>
            </div>
          </form>
          <div className="pt-2 btn btn-brand w-100 py-2 mt-4">Add</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
