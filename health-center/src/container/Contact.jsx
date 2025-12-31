import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";

function Contact(props) {
  return (
    <Routes>
      <Route path="/contact" element={ <Footer/>}/>
    </Routes> 
   
  );
}

export default Contact;
