import React from "react";
import {Link}from 'react-router-dom'

function Footer(props) {
  return (
    <>
      <footer data-stellar-background-ratio={5}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="footer-thumb">
                <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                  Contact Info
                </h4>
                <p>
                  Fusce at libero iaculis, venenatis augue quis, pharetra lorem.
                  Curabitur ut dolor eu elit consequat ultricies.
                </p>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-phone" /> 010-070-0170
                  </p>
                  <p>
                    <i className="fa fa-envelope-o" />{" "}
                    <Link to="/">info@company.com</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="footer-thumb">
                <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                  Latest News
                </h4>
                <div className="latest-stories">
                  <div className="stories-image">
                    <Link to="/">
                      <img
                        src="./assets/images/news-image.jpg"
                        className="img-responsive"
                        alt
                      />
                    </Link>
                  </div>
                  <div className="stories-info">
                    <Link to="/">
                      <h5>Amazing Technology</h5>
                    </Link>
                    <span>March 08, 2018</span>
                  </div>
                </div>
                <div className="latest-stories">
                  <div className="stories-image">
                    <Link to="/">
                      <img
                        src="./assets/images/news-image.jpg"
                        className="img-responsive"
                        alt
                      />
                    </Link>
                  </div>
                  <div className="stories-info">
                    <Link to="/">
                      <h5>New Healing Process</h5>
                    </Link>
                    <span>February 20, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="footer-thumb">
                <div className="opening-hours">
                  <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                    Opening Hours
                  </h4>
                  <p>
                    Monday - Friday <span>06:00 AM - 10:00 PM</span>
                  </p>
                  <p>
                    Saturday <span>09:00 AM - 08:00 PM</span>
                  </p>
                  <p>
                    Sunday <span>Closed</span>
                  </p>
                </div>
                <ul className="social-icon">
                  <li>
                    <Link
                      to="https://www.facebook.com/tooplate"
                      className="fa fa-facebook-square"
                      attr="facebook icon"
                    />
                  </li>
                  <li>
                    <Link to="/" className="fa fa-twitter" />
                  </li>
                  <li>
                    <Link to="/" className="fa fa-instagram" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 border-top">
              <div className="col-md-4 col-sm-6">
                <div className="copyright-text">
                  <p>
                    Copyright © 2017 Your Company | Design:{" "}
                    <Link to="http://www.tooplate.com" target="_parent">
                      Tooplate
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="footer-link">
                  <Link to="/">Laboratory Tests</Link>
                  <Link to="/">Departments</Link>
                  <Link to="/">Insurance Policy</Link>
                  <Link to="/">Careers</Link>
                </div>
              </div>
              <div className="col-md-2 col-sm-2 text-align-center">
                <div className="angle-up-btn">
                  <Link
                    to="/"
                    className="smoothScroll wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <i className="fa fa-angle-up" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
