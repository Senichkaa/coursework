import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    removeCart(state, action) {
      state.cart = state.cart.filter(car => car !== action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
