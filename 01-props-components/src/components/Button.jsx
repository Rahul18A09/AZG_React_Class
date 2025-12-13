import { useState } from "react";

const Button = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Button;
