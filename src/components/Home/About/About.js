import React from "react";
import "./About.css";
import img1 from "../../../image/LandingPage/img1.svg";
import img2 from "../../../image/LandingPage/img2.png";
import Vector1 from "../../../image/LandingPage/Vector1.png";
import Vector2 from "../../../image/LandingPage/Vector2.png";
import Vector3 from "../../../image/LandingPage/Vector3.png";
import HomeFooter from "../HomeFooter/HomeFooter";
import LandingNavTop from "../../LandingPage/LandingNavTop/LandingNavTop";

const About = () => {
  return (
    <>
      <LandingNavTop title="About Us" route="About Us" />
      <main className="main-container">
        <section className="">
          <div className="about-container container">
            <div>
              <h2 className="about-header-text">About Utopian</h2>
              <p className="about-title-text">
                Utopian is an investment company where we can earn a good
                profit.{" "}
              </p>
              <p className="about-title-text">
                Now here more than millions of people working on here. We have
                more than 300+ projects and those are established more than 26
                countries all over the world. Our basic target to those people
                who wants to earn by investing a little amount.
              </p>
              <p className="about-title-text">
                We collect this invest so carefully and give them a good amount
                of profits. Our goal is to converted the unemployment population
                into a great manpower and to reach out our dreamland. Dream is
                your, our responsibility to fulfill your demands. Create
                community Larger, Earn Bigger.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img className="image" src={img1} alt="" />
            </div>
          </div>
        </section>

        <section className="project-section ">
          <div className="project-wrapper container">
            <div className="project-item">
              <img src={Vector1} alt="" />
              <div className="parent-item">
                <h3 className="project-item-header-text">
                  300 <span>+</span>
                </h3>
                <p>Project</p>
              </div>
            </div>
            <div className="project-item">
              <img src={Vector2} alt="" />
              <div className="parent-item">
                <h3 className="project-item-header-text">
                  100M <span>+</span>
                </h3>
                <p>Project</p>
              </div>
            </div>
            <div className="project-item">
              <img src={Vector3} alt="" />
              <div className="parent-item">
                <h3 className="project-item-header-text">23</h3>
                <p>Counting Project</p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="about-container container">
            <div className="project-image-wrapper">
              <img className="image" src={img2} alt="" />
            </div>
            <div>
              <h2 className="about-header-text">Why Invest Here</h2>
              <p className="about-title-text">
                You can earn 400% profit this indicates a hug. In this complex
                world we offered you a very simple and smart way to earn better.
                Moreover, we have used our six years of experience as capital
                and three million of global clients in 26 different countries
                who always connected in a great trust with us.
              </p>

              <p className="about-title-text">
                Not only earning but also it will build up your community that
                will helps you in many others way.
              </p>
            </div>
          </div>
        </section>
      </main>
      <hr />
      <HomeFooter />
    </>
  );
};

export default About;
