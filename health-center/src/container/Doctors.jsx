import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faFacebookSquare,
  faTwitter,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";

function Doctors(props) {
  return (
    <main>
      <section id="team" data-stellar-background-ratio={1}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.1s">
                  Our Doctors
                </h2>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                <img
                  src="./assets/images/team-image1.jpg"
                  className="img-responsive"
                  alt
                />
                <div className="team-info">
                  <h3>Nate Baston</h3>
                  <p>General Principal</p>
                  <div className="team-contact-info">
                    <p>
                      {" "}
                      <FontAwesomeIcon  icon={faPhone} /> 010-020-0120
                    </p>
                    <p>
                      {" "}
                      <FontAwesomeIcon  icon={faEnvelope} />{" "}
                      <Link to="/">general@company.com</Link>
                    </p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon className="a" icon={faLinkedin} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon className="a" icon={faEnvelope} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                <img
                  src="./assets/images/team-image2.jpg"
                  className="img-responsive"
                  alt
                />
                <div className="team-info">
                  <h3>Jason Stewart</h3>
                  <p>Pregnancy</p>
                  <div className="team-contact-info">
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> 010-070-0170
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                      <Link to="/">pregnancy@company.com</Link>
                    </p>
                  </div>
                  <ul className="social-icon">
                    <li>
                       <Link to="/">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faFlickr} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                <img
                  src="./assets/images/team-image3.jpg"
                  className="img-responsive"
                  alt
                />
                <div className="team-info">
                  <h3>Miasha Nakahara</h3>
                  <p>Cardiology</p>
                  <div className="team-contact-info">
                    <p>
                       <FontAwesomeIcon icon={faPhone} /> 010-040-0140
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      <Link to="/">cardio@company.com</Link>
                    </p>
                  </div>
                  <ul className="social-icon">
                    <li>
                       <Link to="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Doctors;
