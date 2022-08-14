import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-whole">
      <footer>
        <div className="footer-left">
          <div className="nav-logo">
            <Link to="/" className="navbar-logo">
              ZEN<span className="monthly-new view">i5</span>
            </Link>
          </div>
          <p>
            <MdLocationOn />
            THub,Hyderbad
          </p>
          <p>
            <GrMail /> mail@thub.com
          </p>
          <p>
            <BsTelephoneFill />
            123456789
          </p>
        </div>
        <div className="footer-right">
          <ul>
            <p>Quick Links</p>
            <li>Contact Us</li>
            <li>FaQs</li>
            <li>Students</li>
            <li>College</li>
          </ul>
        </div>
      </footer>
      <p className="copyright">Copyright @2022 | Designed by ZENi5</p>
      <div className="footer-logo">
        <BsFacebook />
        <BsTwitter />
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default Footer;
