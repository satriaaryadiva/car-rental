// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import carReducer from './slicer/carSlicer';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
