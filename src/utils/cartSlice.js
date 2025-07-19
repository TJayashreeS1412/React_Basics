import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // has small reducers functions
  reducers: {
    addItem: (state, action) => {
      // mutating state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // update exact item
      state.items = state.items.filter((item) => item != action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
