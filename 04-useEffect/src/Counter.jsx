import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log("component mounted");
    
    console.log("Count changed:", count);
    
  },[count]);


  return (
    <div>
    <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
  
    </div>
  );
};

export default Counter;
