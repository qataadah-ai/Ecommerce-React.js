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
      
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
     addToast: () => {
      toast.success("Added To Cart", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToast,
  removeToast,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
