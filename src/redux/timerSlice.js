
import { createSlice } from "@reduxjs/toolkit";

/* Another option to show currentTime is is to use methods 
    1) getHours()
    2) getMinutes()
    3) getSeconds()
    */

    // Create Slice to display the current time 
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
