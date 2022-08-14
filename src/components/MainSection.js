import React, { useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./MainSection.css";
import AOS from "aos";

const MainSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,

  alt,
  imgStart,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className={lightBg ? "home_hero-section" : "home_hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line"></div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {" "}
                  India's first Neo bank for
                  <span style={{ color: "rgb(0, 184, 153)" }}>
                    {" "}
                    College Students
                  </span>
                  <p className="main-info-one">
                    [A Smart Prepaid Card for Students]
                  </p>
                </h1>
                <div className="info-images-img">
                  <img className="info-images-class" src="/google.png" alt="" />
                  <img
                    className="info-images-class-apple"
                    src="/appple.png"
                    alt=""
                  />
                </div>

                <p
                  className={
                    lightTextDesc
                      ? "home_hero-subtitle"
                      : "home_hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="new-line" />

      <div data-aos="zoom-in" className="home__hero-section darkBg">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "end" ? "row" : "row-reverse",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line"></div>
                <div className="heading-mainInfo">
                  <h1 className="heading">
                    Looking for{" "}
                    <span
                      className="heading-col"
                      style={{ color: "rgb(0, 184, 153)" }}
                    >
                      Campus Cards
                    </span>{" "}
                    For your College?{" "}
                  </h1>

                  {/* <p className="home__hero-subtitle">
                  We are limitless prepaid card just for GenZ
                </p>
                <p className="home__hero-subtitle">A RFID enabled debit card</p>
                <p className="home__hero-subtitle">
                  Ease of availing Student discounts
                </p>
                <p className="home__hero-subtitle">
                  A Centralized & highly secured Payment system for Management
                </p> */}
                  {/*  <ul className="coming-1">
                  <li className="comming-2">
                    <p className="home__hero-subtitle">
                      We are{" "}
                      <span className="monthly-new-1">
                        limitless prepaid card{" "}
                      </span>
                      just for GenZ
                    </p>{" "}
                  </li>
                  <li className="comming-2">
                    <p className="home__hero-subtitle">
                      A <span className="monthly-new-1">RFID </span>enabled
                      debit card
                    </p>
                  </li>

                  <li className="comming-2">
                    {" "}
                    <p className="home__hero-subtitle">
                      Ease of availing{" "}
                      <span className="monthly-new-1">Student discounts</span>
                    </p>
                  </li>
                  <li className="comming-2">
                    <p className="home__hero-subtitle">
                      A{" "}
                      <span className="monthly-new-1">
                        Centralized & highly secured Payment
                      </span>{" "}
                      system for Management
                    </p>
                  </li>
                </ul> */}
                </div>
                <p className="second-mainInfo">
                  Join us to provide your Students Smart Prepaid Card Solution
                  to Cater all their Payment.
                </p>
                <div className="main-form">
                  <form
                    action="
                "
                  >
                    <input type="text" name="txt" placeholder="Name" id="" />
                    <br />
                    <input
                      type="tel"
                      name=""
                      placeholder="Mobile number"
                      id=""
                    />
                    <br />
                    <input
                      type="text"
                      name=""
                      placeholder="Institute name"
                      id=""
                    />
                    <br />
                    <button>Contact Us</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src="/school-4.png" className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
