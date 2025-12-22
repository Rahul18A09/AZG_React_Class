import React from "react";
import Profile from "./components/Profile";
import WithBorder from "./components/WithBorder";
import DashBoard from "./components/DashBoard";
import WithAuth from "./components/WithAuth";

const ProfileWithBorder = WithBorder(Profile);
const DashBoardWithBorder = WithBorder(DashBoard);
const ProtectedDashBoard= WithAuth(DashBoard);
const ProtectedProfile = WithAuth(Profile)

const App = () => {
  return (
    <>
      <ProfileWithBorder />
      <DashBoardWithBorder/>
      <ProtectedDashBoard/>
      <ProtectedProfile/>
    </>
  );
};

export default App;
