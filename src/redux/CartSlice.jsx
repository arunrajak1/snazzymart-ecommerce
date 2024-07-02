import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        // If item already exists in cart, increase quantity
        existingItem.quantity++;
      } else {
        // If item is not yet in cart, add it with quantity 1
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
    },
    increaseItemQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.cartItems.find(item => item.id === itemIdToIncrease);

      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.cartItems.find(item => item.id === itemIdToDecrease);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== itemIdToDecrease);
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const selectCartItems = state => state.cart.cartItems;

export const selectCartTotal = state =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
