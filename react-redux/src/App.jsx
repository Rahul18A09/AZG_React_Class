import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/CounterSlice";
import Navbar from "./Navbar";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (

    <>
    <Navbar/>
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
    </>
   
  );
}

export default App;
