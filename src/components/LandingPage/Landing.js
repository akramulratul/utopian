import React from "react";
import LandingTop from "./LandingTop";
import Steps from "./Steps/Steps";
import TypesOfIncome from "./TypesOfIncome/TypesOfIncome";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Affiliate from "./Affiliate/Affiliate";
import CopywriteFooter from "../CopywriteFooter/CopywriteFooter";

const Landing = () => {
  return (
    <div>
      <LandingTop />
      <Steps />
      <TypesOfIncome />
      <WhyChooseUs />
      <Affiliate />
      <CopywriteFooter />
    </div>
  );
};

export default Landing;
