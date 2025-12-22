import React from "react";
import Profile from "./components/Profile";
import WithBorder from "./components/WithBorder";
import DashBoard from "./components/DashBoard";

const ProfileWithBorder = WithBorder(Profile);
const DashBoardWithBorder = WithBorder(DashBoard);

const App = () => {
  return (
    <>
      <ProfileWithBorder />
      <DashBoardWithBorder/>
    </>
  );
};

export default App;
