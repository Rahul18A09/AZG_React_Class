import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashBoard;
