import React from "react";
import { Route, Routes } from "react-router-dom";


import UserRoutes from "./routes/UserRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./container/admin/SideNav";




import Doctors from "./container/admin/pages/Doctors";
import Appointment from "./container/admin/pages/Appointment";
import ContactUs from "./container/admin/pages/ContactUs";
import Dashboard from "./container/admin/pages/Dashboard";


function App(props) {
  return (
    <>
      {/* <Header />
      <UserRoutes />
      <Footer /> */}

      {/* <SideNav/> */}
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
