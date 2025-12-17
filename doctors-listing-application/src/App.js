import React from "react";
import Header from "./components/Header/Header";
import Doctors from "./components/Pages/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Routes>
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
