/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
 
};
const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    Remove: (state, action) => {
      const cartItem = action.payload;
      state.cart = state.cart.filter((item) => item.id !== cartItem);
    },

    emptycartItem: (state) => {
      state.cart = [];
    },

    Increment: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    Decrement: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      
      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
      } else if (state.cart[find].quantity === 1) {
        const cartItem = state.cart.filter((item) => item.id !== action.payload );
        state.cart = cartItem;
        // console.log(cartItem)
      }
    },

   
  },
});

export const { add, emptycartItem, Increment, Decrement, Remove, } =
  CartSlice.actions;
export default CartSlice.reducer;
