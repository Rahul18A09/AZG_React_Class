import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <>
      <div className="container h-screen flex bg-amber-100  items-center  justify-center">
        <div className="place-items-center">
          <h1 className="pb-2 background text-2xl">Counter: {count} </h1>
          <div className="gap-2">
            <button
              className=" bg-emerald-500 text-black py-[5px] px-[8px] border rounded-3xl"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-500  text-black py-[5px] px-[8px] border rounded-3xl"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="bg-blue-300  text-black py-[5px] px-[8px] border rounded-3xl"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
