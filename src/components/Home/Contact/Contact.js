import React from "react";
import CopywriteFooter from "../../CopywriteFooter/CopywriteFooter";
import LandingNavTop from "../../LandingPage/LandingNavTop/LandingNavTop";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <LandingNavTop title="Contact Us" route="Contact Us" />
      <section className="main-contact-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="contact-form text-center">
                <h1 className="pt-3">Get A Free Quote</h1>
                <p className="need-perfect-width">
                  We look forward to hearing from you. Email us to learn more
                  about our firm and capabilities.
                </p>
                <form action="">
                  <div className="input-div">
                    <input type="text" name="" id="" placeholder="First Name" />
                    <input type="text" name="" id="" placeholder="Last Name" />
                  </div>
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="email"
                    placeholder="Email"
                  />
                  <br />
                  <br />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                    className="text-input"
                  ></textarea>
                  <br />

                  <input
                    type="submit"
                    value="Send Message"
                    className="form-submit-button"
                  />

                  {/* <button className="form-submit-button">submit</button> */}
                </form>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
      <CopywriteFooter />
    </div>
  );
};

export default Contact;
