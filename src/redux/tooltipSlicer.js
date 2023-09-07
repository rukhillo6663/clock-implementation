import { createSlice } from "@reduxjs/toolkit";

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleTooltip: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;
