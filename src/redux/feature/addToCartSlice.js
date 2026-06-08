import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartItem = JSON.parse(localStorage.getItem("cart")) || [];

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
  items: cartItem,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If product already exists, increment quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        // If product is new, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
     addToast: () => {
      toast.success("Added To Cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    removeToast: () => {
      toast.error("Removed from Cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  },
});

export const { addToCart, removeFromCart, addToast, removeToast } = addToCartSlice.actions;
export default addToCartSlice.reducer;
