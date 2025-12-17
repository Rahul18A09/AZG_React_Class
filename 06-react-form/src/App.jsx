import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Registration from "./container/Registration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </div>
  );
};

export default App;
