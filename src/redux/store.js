import { configureStore } from '@reduxjs/toolkit';
import extractedDataReducer from './slices/extractedDataSlice';

const store = configureStore({
  reducer: {
    extractedData: extractedDataReducer,
  },
});

export default store;
