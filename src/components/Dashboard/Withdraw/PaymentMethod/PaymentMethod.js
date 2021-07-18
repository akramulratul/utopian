import React from "react";
import "../../../../styles/_Withdraw.scss";
import Sidebar from "../../Sidebar";
import WithdrawNow from "../WithdrawNow";
import { useState } from "react";
import SelectCountry from "./SelectCountry";
import security from "../../../../image/icons/security 1.svg";
import WithdrawGateway from "./WithdrawGateway";
import DashboardNav from "../../DashboardNav";
import SubNav from "../../Shared/SubNav";

const PaymentMethod = () => {
  const [value, setValue] = useState("");
  const [method, setMethod] = useState("");

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const changeHandler = (value) => {
    if (value.value === "BD") {
      setValue(value.label);
    } else {
      setValue("");
    }
  };
  const paymentMethod = {
    method: method,
    number: phoneNumber,
  };

  sessionStorage.setItem("withdraw", JSON.stringify(paymentMethod));

  const setPementMethod = (method) => {
    console.log(method);
    setMethod(method);
  };
  const setNumber = (number) => {
    setPhoneNumber(number);
  };
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
  console.log(paymentMethod);
  return (
    <div className="row mr-0">
        {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
      <div className={`p-0 m-0 witdraw-background ${isSideBarOpen ? "col-9":"col-12"}`}>
        <div>
          <DashboardNav closeSidebar={closeSidebar}/>
          <WithdrawNow />
          <div className="bg-white ml-3 mr-3 mt-3">
            {" "}
            {/* <NavPayment /> */}
            <SubNav
              firstOption={{ link: "/payment-method", title: "Payment Method" }}
              secondOption={{ link: "/withdrawal", title: "Withdrawal" }}
              thirdOption={{ link: "/otp", title: "OTP" }}
            />
            <div className="row d-flex justify-content-between m-3 p-3 bg-white">
              <div className="col-lg-6 col-12">
                <h2 className="text-center">
                  <b>Select Country</b>
                </h2>
                <h4 className="text-center">
                  Choose your country for your withdraw
                </h4>

                <SelectCountry changeHandler={changeHandler} value={value} />
              </div>

              <div className="col-lg-6 col-12 ">
                {value !== "" ? (
                  <WithdrawGateway
                    setPementMethod={setPementMethod}
                    setNumber={setNumber}
                  />
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
