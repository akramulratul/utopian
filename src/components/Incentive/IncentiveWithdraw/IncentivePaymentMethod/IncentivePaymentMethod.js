import React, { useState } from "react";
import Sidebar from "../../../Dashboard/Sidebar";
import DashboardNav from "../../../Dashboard/DashboardNav";
import IncentiveWithdrawNow from "../IncentiveWithdrawNow";
import SubNav from "../../../Dashboard/Shared/SubNav";
import SelectCountry from "../../../Dashboard/Withdraw/PaymentMethod/SelectCountry";
import security from "../../../../image/icons/security 1.svg";
import InWithdrawGateway from "./InWithdrawGateway";
import InSelectCountry from "./InSelectCountry";
import CountrySelector from "./CountrySelector";
const IncentivePaymentMethod = () => {
  const [value, setValue] = useState("");

  const [method, setMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const changeHandler = (value) => {
    if (value.value === "BD") {
      console.log("clicked");
      setValue(value.label);
    } else {
      setValue("");
    }
  };
  // const changeHandler = (value) => {
  //   if (value.value === "BD") {
  //     setValue(value.label);
  //   } else {
  //     setValue("");
  //   }
  // };
  const IncentivePaymentMethod = {
    method: method,
    number: phoneNumber,
  };
  const setPaymentMethod = (method) => {
    console.log(method);
    setMethod(method);
  };
  const setNumber = (number) => {
    setPhoneNumber(number);
  };
  console.log(IncentivePaymentMethod);
  return (
    <div className="row mr-0">
      {isSideBarOpen && (
        <div
          className={`sidebar-container p-0 ${
            isSideBarOpen && "sidebar-active col-lg-3"
          }`}
        >
          <Sidebar closeSidebar={closeSidebar} />
        </div>
      )}
      <div
        className={`p-0 m-0 witdraw-background ${
          isSideBarOpen ? "col-9" : "col-12"
        }`}
      >
        <div>
          <DashboardNav />
          <IncentiveWithdrawNow />
          <div className="bg-white ml-3 mr-3 mt-3">
            {/* <NavPayment /> */}
            <SubNav
              firstOption={{
                link: "/dashboard/incentive/paymentMethod",
                title: "Payment Method",
              }}
              secondOption={{
                link: "/dashboard/incentiveWithdrawal",
                title: "Withdrawal",
              }}
              thirdOption={{ link: "/dashboard/incentive/otp", title: "OTP" }}
            />
            <div className="row d-flex justify-content-between m-3 p-3 bg-white">
              <div className="col-lg-6 col-12">
                <h2 className="text-center">
                  <b>Select Country</b>
                </h2>
                <h4 className="text-center">
                  Choose your country for your withdraw
                </h4>
                <CountrySelector value={value} changeHandler={changeHandler} />
                {/* <InSelectCountry value={value} changeHandler={changeHandler} /> */}
              </div>

              <div className="col-lg-6 col-12 ">
                {value !== "" ? (
                  <InWithdrawGateway
                    setPaymentMethod={setPaymentMethod}
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

export default IncentivePaymentMethod;
