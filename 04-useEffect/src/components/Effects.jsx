import React from "react";
import { useEffect } from "react";

const Effects = () => {
    
  useEffect(() => {
    console.log("Component Mounted");
  },[]);

  return <h1>Hello React</h1>;
};

export default Effects;
