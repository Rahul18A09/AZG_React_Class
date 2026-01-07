import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import Login from "./admin/pages/Login";
import AdminRoutes from "./routes/AdminRoutes";

function App(props) {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/*" element={<UserRoutes />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
