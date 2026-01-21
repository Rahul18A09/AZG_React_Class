import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const gotoAbout = () => {
    navigate("/about");
  };

  
  return (
    <div>
      <h1>WelCome to Home Page</h1>
      <button onClick={gotoAbout}>Go To About</button>
    </div>
  );
}

export default Home;
