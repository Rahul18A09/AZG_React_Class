import { createStore } from "redux";
import counterReducer from "./redcer";


const store = createStore(counterReducer);

export default store;