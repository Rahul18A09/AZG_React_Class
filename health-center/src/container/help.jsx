<div>
   {/* PRE LOADER */}
  <section className="preloader">
    <div className="spinner">
      <span className="spinner-rotate" />
    </div>
  </section>

  {/* HEADER  */}
  <header>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-5">
          <p>Welcome to a Professional Health Care</p>
        </div>
        <div className="col-md-8 col-sm-7 text-align-right">
          <span className="phone-icon"><i className="fa fa-phone" /> 010-060-0160</span>
          <span className="date-icon"><i className="fa fa-calendar-plus-o" /> 6:00 AM - 10:00 PM (Mon-Fri)</span>
          <span className="email-icon"><i className="fa fa-envelope-o" /> <Link to={'/'}>info@company.com</Link></span>
        </div>
      </div>
    </div>
  </header>
    {/* MENU  */}
  <section className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
       {/* lOGO TEXT HERE */}
        <Link to="/" className="navbar-brand"><i className="fa fa-h-square" />ealth Center</Link>
      </div>
     {/* MENU LINKS  */}
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/" className="smoothScroll">Home</Link></li>
          <li><Link to="/about" className="smoothScroll">About Us</Link></li>
          <li><Link to="/doctors" className="smoothScroll">Doctors</Link></li>
          <li><Link to="/news" className="smoothScroll">News</Link></li>
          <li><Link to="/" className="smoothScroll">Contact</Link></li>
          <li className="appointment-btn"><Link to="/appointment">Make an appointment</Link></li>
        </ul>
      </div>
    </div>
  </section>
   {/* HOME */}
  
 {/* ABOUT */}
  
 {/* TEAM */} 
  
{/* NEWS */} 
  
{/* MAKE AN APPOINTMENT */} 
  <
{/* GOOGLE MAP */}
  <section id="google-map">
  {/* How to change your own map point
      1. Go to Google Maps
      2. Click on your location point
      3. Click "Share" and choose "Embed map" tab
      4. Copy only URL and paste it within the src="" field below
	*/} 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen />
  </section>           
 {/* FOOTER */} 
 
</div>
