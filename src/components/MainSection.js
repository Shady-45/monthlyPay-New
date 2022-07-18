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
                    Gen Z Students
                  </span>{" "}
                  Payments{" "}
                </h1>

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
                <h1 className="heading">
                  Hi, We are here to{" "}
                  <span style={{ color: "rgb(0, 184, 153)" }}>Zenify</span>{" "}
                  Students
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
                <ul className="coming-1">
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
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src="/bg-0.png" className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
