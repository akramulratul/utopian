import React from "react";
import incomeImage from "../../../image/TypeOfIncome/image9-type.svg";
import chcek from "../../../image/TypeOfIncome/check.svg";

const TypesOfIncome = () => {
  const typeOfIncomeName = [
    { icon: chcek, title: "Referral Income" },
    { icon: chcek, title: "Leadership Bonus" },
    { icon: chcek, title: "Salary" },
    { icon: chcek, title: "Incentive" },
    { icon: chcek, title: "Travel Opportunity" },
  ];
  return (
    <div className="type-of-income-container">
      <div className="row m-0 p-0">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="type-text-left text-white pt-5 pt-lg-0 px-5">
            <h1>
              <b>5 Types Of Income On This Company</b>
            </h1>
            <div className="py-4 row">
              {typeOfIncomeName.map((income) => {
                return (
                  <div className="col-6">
                    <div className="d-flex align-items-center ">
                      <img className="p-4" src={income.icon} alt="" />
                      <p className="pt-3">
                        <strong>{income.title}</strong>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-holder">
            <img src={incomeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfIncome;
