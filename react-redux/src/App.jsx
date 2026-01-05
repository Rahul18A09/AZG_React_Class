import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset} from "./redux/CounterSlice";

function App() {

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

  return (
    <>
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
