import React from "react";
import "../../../../styles/_Withdraw.scss";
import Sidebar from "../../Sidebar";
import WithdrawNow from "../WithdrawNow";
import NavPayment from "./NavPayment";
import { useState } from "react";
import SelectCountry from "./SelectCountry";
import security from "../../../../image/icons/security 1.svg";
import WithdrawGateway from "./WithdrawGateway";
import DashboardNav from "../../DashboardNav";

const PaymentMethod = () => {
  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    if (value.value === "BD") {
      setValue(value.label);
    } else {
      setValue("");
    }
    console.log(value);
  };

  console.log(value);
  return (
    <div className="row mr-0">
      <div className="col-lg-3 p-0">
        <Sidebar />
      </div>
      <div className="col-lg-9 p-0 witdraw-background">
        <div>
          <DashboardNav />
          <WithdrawNow />
          <div className="bg-white container ml-3 mr-3 mt-3">
            {" "}
            <NavPayment />
            <div className="row d-flex justify-content-between m-3 p-3 bg-white">
              <div className="col-lg-6 col-12">
                <h4 className="text-center">Select Country</h4>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  nesciunt?{" "}
                </h6>

                <SelectCountry changeHandler={changeHandler} value={value} />
              </div>

              <div className="col-lg-6 col-12 ">
                {value !== "" ? (
                  <WithdrawGateway />
                ) : (
                  <div className="border-left">
                    <img
                      className="rounded mx-auto d-block"
                      src={security}
                      alt=""
                    />
                    <h3 className="text-center">
                      Payment method will be available after selecting country
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
