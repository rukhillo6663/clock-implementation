// store.js
import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./redux/timerSlice";
import tooltipReducer from './redux/tooltipSlicer'
export const store = configureStore({
  reducer: {
    timer: clockReducer,
    tooltip:tooltipReducer
  },
});
