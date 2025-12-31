
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import AboutUs from './container/AboutUs';
import Doctors from './container/Doctors';
import News from './container/News';
import Contact from './container/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import MakeAnAppointment from './container/MakeAnAppointment';

function App(props) {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/makeanappointment' element={<MakeAnAppointment/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;