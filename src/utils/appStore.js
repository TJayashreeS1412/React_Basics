import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // one reducer for the whole app and can contain multiple small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
