import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/countSlice.js";
import footerSlice from "../features/footer/footerSlice.js";

export default configureStore({
  reducer: {
    counter: counterSlice,
    footer: footerSlice
  }
})