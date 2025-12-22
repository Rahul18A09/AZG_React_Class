import React from "react";
import Profile from "./components/Profile";
import WithBorder from "./components/WithBorder";
import DashBoard from "./components/DashBoard";
import WithAuth from "./components/WithAuth";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import WithAuth1 from "./components/WithAuth1";

// const ProfileWithBorder = WithBorder(Profile);
// const DashBoardWithBorder = WithBorder(DashBoard);
const ProtectedDashBoard = WithAuth1(DashBoard);
// const ProtectedProfile = WithAuth(Profile);

const App = () => {
  return (
    // {/* <ProfileWithBorder /> */}
    // {/* <DashBoardWithBorder/> */}
    // {/* <ProtectedDashBoard/> */}
    // {/* <ProtectedProfile/> */}

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedDashBoard />} />
    </Routes>
  );
};

export default App;
