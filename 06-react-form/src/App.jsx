import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Registration from "./container/Registration";
import SimpleForm from "./container/SimpleForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/simpleform" element={<SimpleForm />} />
      </Routes>
    </div>
  );
};

export default App;
