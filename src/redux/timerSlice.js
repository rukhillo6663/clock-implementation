
import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    currentTime: new Date().toLocaleTimeString(),
  },
  reducers: {
    updateTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const { updateTime} = timerSlice.actions;
export default timerSlice.reducer;
