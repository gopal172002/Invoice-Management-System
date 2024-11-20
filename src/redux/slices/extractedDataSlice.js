import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
  products: [],
  customers: [],
};

const extractedDataSlice = createSlice({
  name: 'extractedData',
  initialState,
  reducers: {
    setExtractedData: (state, action) => {
      state.invoices = action.payload.invoices || []; 
      state.products = action.payload.products || [];
      state.customers = action.payload.customers || [];
    },
  },
});

export const { setExtractedData } = extractedDataSlice.actions;
export default extractedDataSlice.reducer;
