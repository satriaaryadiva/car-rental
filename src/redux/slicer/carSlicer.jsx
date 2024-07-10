import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  selectedCategory: 'All',
  selectedCar: null,
  rentalDetails: {},
  totalPrice: 0,
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
    setRentalDetails: (state, action) => {
      state.rentalDetails = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    }
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  setSelectedCar,
  clearSelectedCar,
  setRentalDetails,
  setTotalPrice,
} = carSlice.actions;
export default carSlice.reducer;

// Selectors
export const selectRentalDetails = (state) => state.car.rentalDetails;
export const selectTotalPrice = (state) => state.car.totalPrice;
