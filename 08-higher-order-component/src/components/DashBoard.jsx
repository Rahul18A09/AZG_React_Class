import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>DashBoard (Protected)</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashBoard;
