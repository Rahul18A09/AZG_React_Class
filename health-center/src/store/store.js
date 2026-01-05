import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import doctordReducer from "./slices/doctorSlice";

 const store = configureStore({
    reducer:{
        auth: authReducer,
        doctors: doctordReducer,
    },
});

export default store;