import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faAngleUp,
  faCalendarPlus,
  faHSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <p>Welcome to a Professional Health Care</p>
            </div>
            <div className="col-md-8 col-sm-7 text-align-right">
              <span className="phone-icon">
                <FontAwesomeIcon icon={faPhone} /> 010-060-0160
              </span>
              <span className="date-icon">
                <FontAwesomeIcon icon={faCalendarPlus} /> 6:00 AM - 10:00 PM
                (Mon-Fri)
              </span>
              <span className="email-icon">
                <FontAwesomeIcon icon={faEnvelope} /> 
                <Link to="/">info@company.com</Link>
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* MENU  */}
      <section
        className="navbar navbar-default navbar-static-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
            </button>
            {/* lOGO TEXT HERE */}
            <Link to="/" className="navbar-brand">
              <FontAwesomeIcon icon={faHSquare} /> Health Center
            </Link>
          </div>
          {/* MENU LINKS  */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" className="smoothScroll">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="smoothScroll">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="smoothScroll">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/news" className="smoothScroll">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="smoothScroll">
                  Contact
                </Link>
              </li>
              <li className="appointment-btn">
                <Link to="/appointment">Make an appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
