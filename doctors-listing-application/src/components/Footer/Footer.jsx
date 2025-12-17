import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="address">
        <h3>Address</h3>
        <p>
          F-505,
          <br /> Innovation Plaza
        </p>
        <p>New Delhi, India</p>
      </div>

      <div className="footer-social">
        <span>
          <i className="ri-twitter-fill"></i>
        </span>
        <span>
          <i className="ri-facebook-circle-fill"></i>
        </span>
        <span>
          <i className="ri-instagram-line"></i>
        </span>
        <span>
          <i className="ri-linkedin-box-fill"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
