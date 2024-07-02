import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSucceeded: (state) => {
      state.status = 'succeeded';
    },
    setFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  updateFormData,
  resetFormData,
  setLoading,
  setSucceeded,
  setFailed,
} = checkoutSlice.actions;

export const selectFormData = (state) => state.checkout.formData;
export const selectCheckoutStatus = (state) => state.checkout.status;
export const selectCheckoutError = (state) => state.checkout.error;

export default checkoutSlice.reducer;
