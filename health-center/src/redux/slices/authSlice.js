import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("adminAuth") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("adminAuth", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("adminAuth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
