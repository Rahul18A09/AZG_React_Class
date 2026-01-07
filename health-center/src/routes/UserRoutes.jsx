// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Home from '../container/Home'
// import AboutUs from '../container/AboutUs'
// import Doctors from '../container/Doctors'
// import News from '../container/News'
// import Contact from '../container/Contact'
// import MakeAnAppointment from '../container/MakeAnAppointment'

// const UserRoutes = () => {
//   return (
//     <>
//      <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<AboutUs/>} />
//         <Route path="/doctors" element={<Doctors/>} />
//         <Route path="/news" element={<News/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/appointment" element={<MakeAnAppointment/>} />
//       </Routes>
//     <Footer/>
//     </>
//   )
// }

// export default UserRoutes

import { Routes, Route } from "react-router-dom";
import Home from "../container/Home";
import AboutUs from "../container/AboutUs";
import Doctors from "../container/Doctors";
import News from "../container/News";
import Contact from "../container/Contact";
import MakeAnAppointment from "../container/MakeAnAppointment";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/doctors"
        element={
          <Layout>
            <Doctors />
          </Layout>
        }
      />
      <Route
        path="/news"
        element={
          <Layout>
            <News />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/appointment"
        element={
          <Layout>
            <MakeAnAppointment />
          </Layout>
        }
      />
    </Routes>
  );
};

export default UserRoutes;
