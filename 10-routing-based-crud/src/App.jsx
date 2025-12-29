import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import UserForm from "./Pages/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
