import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("appointments")) || [],
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem(
        "appointments",
        JSON.stringify(state.list)
      );
    },

    updateAppointment: (state, action) => {
      const index = state.list.findIndex(
        (apt) => apt.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        localStorage.setItem(
          "appointments",
          JSON.stringify(state.list)
        );
      }
    },

    deleteAppointment: (state, action) => {
      state.list = state.list.filter(
        (apt) => apt.id !== action.payload
      );
      localStorage.setItem(
        "appointments",
        JSON.stringify(state.list)
      );
    },
  },
});

export const {
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
