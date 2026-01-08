import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../container/Users/Home";
import AboutUs from "../container/Users/AboutUs";
import Doctors from "../container/Users/Doctors";
import News from "../container/Users/News";
import MakeAnAppointment from "../container/Users/MakeAnAppointment";
import ContactUs from "../container/Users/Contact";



function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/appointment' element={<MakeAnAppointment/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default UserRoutes
