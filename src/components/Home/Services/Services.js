import React from "react";
import "./Services.css";
import sign from "../../../image/landingPage/services/sing.png";
import hardwork from "../../../image/landingPage/services/hardwork.png";
import box from "../../../image/landingPage/services/box.png";
import writing from "../../../image/landingPage/services/writing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import HomeFooter from "../HomeFooter/HomeFooter";
import NavBars from "../../NavBars/NavBars";
import LandingNavTop from "../../LandingPage/LandingNavTop/LandingNavTop";

const Services = () => {
  return (
    <div>
      <LandingNavTop title="Our Project" route="Project" />
      <section className="main-service-background">
        <div className="container">
          <div className="plan-caption text-center">
            <h2>We Plan For Your Future</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim
              unde, voluptatibus suscipit iste sequi ab .
            </p>
          </div>
          <div className="row mt-5 pt-2">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={box} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title same-text">E-Commerce</h5>
                  <p className="card-text same-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint enim unde, voluptatibus suscipit iste sequi ab .
                  </p>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={hardwork} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title same-text">Brick Factory</h5>
                  <p className="card-text same-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint enim unde, voluptatibus suscipit iste sequi ab .
                  </p>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={writing} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title same-text">Real Estate</h5>
                  <p className="card-text same-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint enim unde, voluptatibus suscipit iste sequi ab .
                  </p>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* < !-- ///services-section --> */}
      <div div className="services-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-4">
              <div className="services-captions">
                <h2>Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nesciunt cupiditate et tempora eos deleniti aliquid.
                </p>
              </div>
              <div className="services-list mt-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="services-items pb-5">
                      <ul>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Air Ticket</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>It management</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Export Import</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Multipurpose</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="services-items pb-5">
                      <ul>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Air Ticket</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>It management</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Export Import</small>
                        </li>
                        <li>
                          <span className="space">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </span>
                          <small>Multipurpose</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-image">
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Services;
