import { configureStore } from '@reduxjs/toolkit';
import carReducer from './slicer/carSlicer'

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;
