import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    Products: [],
    mensClothing: [],
    womensClothing: [],
    electronics: [],
    jewelery: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Products = action.payload;
        state.mensClothing = action.payload.filter(product => product.category === "men's clothing");
        state.womensClothing = action.payload.filter(product => product.category === "women's clothing");
        state.electronics = action.payload.filter(product => product.category === "electronics");
        state.jewelery = action.payload.filter(product => product.category === "jewelery");

      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
