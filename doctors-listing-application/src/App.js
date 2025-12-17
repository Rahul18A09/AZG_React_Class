import React from "react";
import Header from "./components/Header/Header";
import Doctors from "./components/Pages/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Main from "./components/main/Main";
import DoctorDetails from "./components/Pages/Doctors/DoctorDetails";
import NotFound from "./components/Pages/NotFound";


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path=":id" element={<DoctorDetails/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
