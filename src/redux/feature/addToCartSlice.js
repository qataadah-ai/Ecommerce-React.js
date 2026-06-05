import { createSlice } from "@reduxjs/toolkit";

const cartItem = JSON.parse(localStorage.getItem("cart")) || [];

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    items: cartItem,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
