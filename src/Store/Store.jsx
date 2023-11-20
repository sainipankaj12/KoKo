import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FormSlice from "./FormSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    form: FormSlice,
  },
});

export default Store;
