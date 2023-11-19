import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './carsThunk';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      })
      .addCase(fetchAllCars.pending, (state, action) => {
        return {
          ...state,
          error: action.payload,
          isLoading: true,
        };
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        return {
          ...state,
          cars: action.payload,
          isLoading: false,
        };
      });
  },
});

export const carsReducer = carsSlice.reducer;
