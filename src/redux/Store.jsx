import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';
import checkoutReducer from './CheckoutSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,

  },
});

export default store;
