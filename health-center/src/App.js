import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Public pages
import Home from "./container/Home";
import AboutUs from "./container/AboutUs";
import Doctors from "./container/Doctors";
import News from "./container/News";
import Contact from "./container/Contact";
import MakeAnAppointment from "./container/MakeAnAppointment";
import Header from "./components/Header";
import Footer from "./components/Footer";


// Admin
import AdminLogin from "./admin/auth/AdminLogin";
import AdminLayout from "./admin/layout/AdminLayout";
import ProtectedRoute from "./admin/auth/ProtectedRoute";

// Admin pages
import Dashboard from "./admin/pages/Dashboard";
import AdminDoctors from "./admin/pages/AdminDoctors";


function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route path="/" element={<Home />} />

        {/* 🔐 ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin panel (Protected) */}
        <Route path="/admin" element={<ProtectedRoute>
          <AdminLayout/>
        </ProtectedRoute>} />

         {/* Default admin route */}
         <Route index element={<Navigate to="dashboard"/>}/>
         <Route path="dashboard" element={<Dashboard/>}/>
         <Route path="doctors" element={<AdminDoctors/>}/>

        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<MakeAnAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
