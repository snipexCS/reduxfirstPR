import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../features/slices/sliderSlice'
import filterReducer from '../features/slices/productsSlice'


export const store = configureStore({
  reducer: {
    slider:sliderReducer,
    filter:filterReducer,
  },
});
