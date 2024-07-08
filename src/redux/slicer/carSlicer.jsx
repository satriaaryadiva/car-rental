// src/features/car/carSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  selectedCategory: 'All',
  selectedCar: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },
  },
});

export const { setSearchTerm, setSelectedCategory, setSelectedCar, clearSelectedCar } = carSlice.actions;
export default carSlice.reducer;
