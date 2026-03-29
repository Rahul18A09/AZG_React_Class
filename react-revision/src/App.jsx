import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const showMessage = () => {
    alert("Welcome to my World!");
    console.log("Hello Students");
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };


  const handleSubmit = () => {
    e.preventDefault(); 
    console.log("Form Submitted");
    
  }

  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button> */}

      {/* inline event handler */}
      {/* <button onClick={() => console.log("button clicked")}>Click</button>    */}

      {/* Saperate event handler */}
      {/* <button onClick={showMessage}>Show</button> */}

      {/* Using Event object */}
      {/* <input type="text" onBlur={handleInput} /> */}


      {/* Prevent Default Behaviour */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
