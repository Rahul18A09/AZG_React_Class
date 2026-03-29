import React, { useEffect, useRef, useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount((count) => count + 1);
  // }

  // const inputRef = useRef(null);


  useEffect(() => {
    console.log("Welcome!");
   
  },[]);

  const countRef = useRef(0);
  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicked:", countRef.current);
  };

  // const handleFocus = () => {
  //   inputRef.current.focus();
  // }

  return (
    <>
      {/* <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Increament</button>
      </div> */}

      {/* <div>
<input type="text" placeholder="Click button to focus" ref={inputRef} />
<button onClick={handleFocus}>Focus Input</button>
</div> */}

      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;
