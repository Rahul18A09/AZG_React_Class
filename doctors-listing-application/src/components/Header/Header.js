import React from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div>
          <span>
            <i className="ri-mail-line"></i>cityhospital@example.com
          </span>
          <span>
            <i className="ri-smartphone-line"></i>+91 9988776655
          </span>
        </div>

        <div>
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
      </div>

      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">
            City <br />
            <span>Multispeciality Hospital</span>
          </h2>
        </div>

        <div className="navbar-right">
          <ul>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <button className="btn">Make an Appointment</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
