import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const { addCustomer, setCustomers } = customerSlice.actions;
export default customerSlice.reducer;
