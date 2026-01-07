import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("doctors")) || [],
};

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    addDoctor: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("doctors", JSON.stringify(state.list));
    },

    updateDoctor: (state, action) => {
      const index = state.list.findIndex(
        (doc) => doc.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        localStorage.setItem("doctors", JSON.stringify(state.list));
      }
    },

    deleteDoctor: (state, action) => {
      state.list = state.list.filter(
        (doc) => doc.id !== action.payload
      );
      localStorage.setItem("doctors", JSON.stringify(state.list));
    },
  },
});

export const {
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = doctorSlice.actions;

export default doctorSlice.reducer;
