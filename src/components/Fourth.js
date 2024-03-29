import React, { useEffect } from "react";
import "./Fourth.css";
import AOS from "aos";

const Fourth = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <hr className="new-line-1" />
      <section class="categories" data-aos="zoom-in">
        <div class="container categories__container">
          <div class="categories__left">
            <h1 className="four-info">One Card Solution</h1>
            <div className="bullet-points">
              <ul>
                <li>ID Card</li>
                <li>Student discounts</li>
                <li>Attendance</li>
                <li>Fee Payments</li>

                <li>One Tap Payments</li>
                <li>ERP Integrations</li>
              </ul>
            </div>
            <img className="cater-blonde" src="/blode.png" alt="" />
            {/*  <h1 style={{ color: "black" }}>Gen Z</h1>
            <p className="new-cards">
              [RFID enabled Prepaid Wallet Smart Card]
            </p>
            <div className="genz-images">
              <img className="genz-img" src="/shield.png" alt="" />
              <img className="genz-img" src="/lock.png" alt="" />
              <img className="genz-img" src="/privacy.png" alt="" />
            </div> */}
            {/*  <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cupiditate perspiciatis illo, sed dolorem facere possimus ipsum
              fugit error fuga.
            </p> */}
          </div>
          <div class="categories__right">
            <article class="category first">
              {/*  <span class="category__icon">
                  <i class="uil uil-bitcoin-circle"></i> 
              </span>  */}
              {/* <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/pano-4.svg" data-aos="fade-left" alt="" />
            </article>

            <article class="category">
              {/* <span class="category__icon" /> */}
              <img src="/id-card.png" data-aos="fade-left" alt="" />
            </article>

            <article class="category">
              {/*  <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/pano-3.svg" data-aos="fade-left" alt="" />
            </article>

            <article class="category first">
              {/* <span class="category__icon">
                <i class="uil uil-usd-circle"></i>
              </span>
              <h5>Javascript</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              {/* <img src="/discount.png" alt="" /> */}
              <img src="/discount.png" data-aos="fade-right" alt=""></img>
            </article>

            <article class="category">
              {/* <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/online-groceries.png" data-aos="fade-right" alt="" />
            </article>

            <article class="category">
              {/*  <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>Monthly Pay</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img
                /* style={{ height: "260px" }} */ src="/gift-card.png"
                alt=""
                data-aos="fade-right"
              />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourth;
