import React from 'react';
import {Link}from 'react-router-dom'

function News(props) {
    return (
        <main>
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
              <img src="images/news-image1.jpg" className="img-responsive" alt />
            </Link>
            <div className="news-info">
              <span>March 08, 2018</span>
              <h3><Link to="/news">About Amazing Technology</Link></h3>
              <p>Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.</p>
              <div className="author">
                <img src="images/author-image.jpg" className="img-responsive" alt />
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
              <img src="images/news-image2.jpg" className="img-responsive" alt />
            </Link>
            <div className="news-info">
              <span>February 20, 2018</span>
              <h3><Link to="news">Introducing a new healing process</Link></h3>
              <p>Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.</p>
              <div className="author">
                <img src="images/author-image.jpg" className="img-responsive" alt />
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
              <img src="images/news-image3.jpg" className="img-responsive" alt />
            </Link>
            <div className="news-info">
              <span>January 27, 2018</span>
              <h3><Link to="/news">Review Annual Medical Research</Link></h3>
              <p>Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.</p>
              <div className="author">
                <img src="images/author-image.jpg" className="img-responsive" alt />
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
        </main>
    );
}

export default News;