import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="counter-container">
        <p id="para">You have clicked {count} times</p>
        <div className="btn-group">
        <button id="btn" onClick={()=> {setCount(count + 1)}}>Increase</button>
        <button id="btn1" onClick={()=> {setCount(count - 1)}}>Decrease</button>
        </div>
        
      </div>
    </div>
  );
};

export default Counter;
