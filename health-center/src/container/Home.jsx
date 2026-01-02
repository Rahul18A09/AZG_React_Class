import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faFacebookSquare,
  faTwitter,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <main>
      {/* Home */}
      <section id="home" className="slider" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item item-first">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Let's make your life happier</h3>
                    <h1>Healthy Living</h1>
                    <Link
                      to="/doctors"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Meet Our Doctors
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-second">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Aenean luctus lobortis tellus</h3>
                    <h1>New Lifestyle</h1>
                    <Link
                      to="/about"
                      className="section-btn btn btn-default btn-gray smoothScroll"
                    >
                      More About Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-third">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Pellentesque nec libero nisi</h3>
                    <h1>Your Health Benefits</h1>
                    <Link
                      to="/news"
                      className="section-btn btn btn-default btn-blue smoothScroll"
                    >
                      Read Stories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                  Welcome to Your <FontAwesomeIcon icon={faHSquare} />
                  ealth Center
                </h2>
                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <p>
                    Aenean luctus lobortis tellus, vel ornare enim molestie
                    condimentum. Curabitur lacinia nisi vitae velit volutpat
                    venenatis.
                  </p>
                  <p>
                    Sed a dignissim lacus. Quisque fermentum est non orci
                    commodo, a luctus urna mattis. Ut placerat, diam a tempus
                    vehicula.
                  </p>
                </div>
                <figure className="profile wow fadeInUp" data-wow-delay="1s">
                  <img
                    src="./assets/images/author-image.jpg"
                    className="img-responsive"
                    alt
                  />
                  <figcaption>
                    <h3>Dr. Neil Jackson</h3>
                    <p>General Principal</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}

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
                      <FontAwesomeIcon icon={faPhone} /> 010-020-0120
                    </p>
                    <p>
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      <Link to="/">general@company.com</Link>
                    </p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faLinkedin} />
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

      {/* News */}

      <section id="news" data-stellar-background-ratio="2.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              {/* SECTION TITLE */}
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Latest News</h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/news">
                  <img
                    src="./assets/images/news-image1.jpg"
                    className="img-responsive"
                    alt
                  />
                </Link>
                <div className="news-info">
                  <span>March 08, 2018</span>
                  <h3>
                    <Link to="/news">About Amazing Technology</Link>
                  </h3>
                  <p>
                    Maecenas risus neque, placerat volutpat tempor ut, vehicula
                    et felis.
                  </p>
                  <div className="author">
                    <img
                      src="./assets/images/author-image.jpg"
                      className="img-responsive"
                      alt
                    />
                    <div className="author-info">
                      <h5>Jeremie Carlson</h5>
                      <p>CEO / Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/news">
                  <img
                    src="./assets/images/news-image2.jpg"
                    className="img-responsive"
                    alt
                  />
                </Link>
                <div className="news-info">
                  <span>February 20, 2018</span>
                  <h3>
                    <Link to="news">Introducing a new healing process</Link>
                  </h3>
                  <p>
                    Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                    et est ligula.
                  </p>
                  <div className="author">
                    <img
                      src="./assets/images/author-image.jpg"
                      className="img-responsive"
                      alt
                    />
                    <div className="author-info">
                      <h5>Jason Stewart</h5>
                      <p>General Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.8s">
                <Link to="/news">
                  <img
                    src="./assets/images/news-image3.jpg"
                    className="img-responsive"
                    alt
                  />
                </Link>
                <div className="news-info">
                  <span>January 27, 2018</span>
                  <h3>
                    <Link to="/news">Review Annual Medical Research</Link>
                  </h3>
                  <p>
                    Vivamus non nulla semper diam cursus maximus. Pellentesque
                    dignissim.
                  </p>
                  <div className="author">
                    <img
                      src="./assets/images/author-image.jpg"
                      className="img-responsive"
                      alt
                    />
                    <div className="author-info">
                      <h5>Andrio Abero</h5>
                      <p>Online Advertising</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}

      <section id="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </section>

      {/* Appointment */}

      <section id="appointment" data-stellar-background-ratio={3}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img
                src="./assets/images/appointment-image.jpg"
                className="img-responsive"
                alt
              />
            </div>
            <div className="col-md-6 col-sm-6">
              {/* CONTACT FORM HERE */}
              <form id="appointment-form" role="form" method="post" action="#">
                {/* SECTION TITLE */}
                <div
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2>Make an appointment</h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="date">Select Date</label>
                    <input
                      type="date"
                      name="date"
                      defaultValue
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="select">Select Department</label>
                    <select className="form-control">
                      <option>General Health</option>
                      <option>Cardiology</option>
                      <option>Dental</option>
                      <option>Medical Research</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label htmlFor="telephone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="Message">Additional Message</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      className="form-control"
                      id="cf-submit"
                      name="submit"
                    >
                      Submit Button
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
