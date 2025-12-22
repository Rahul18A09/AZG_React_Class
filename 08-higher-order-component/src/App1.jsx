import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WithAuth from './component1/WithAuth'
import DashBoard from './component1/DashBoard'
import Login from './component1/Login'



const ProtectedDashBoard = WithAuth(DashBoard)

const App1 = () => {
  return (
 <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<ProtectedDashBoard/>}/>
    <Route path='*' element={<Login/>}/>
 </Routes>
  )
}

export default App1
