import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './carsThunk';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    filteredCars: [],
    filter: { brand: '' },
    isLoading: false,
    isFiltered: false,
    error: null,
  },
  reducers: {
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    setIsCarsFiltered: (state, action) => {
      state.isFiltered = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.rejected, (state, action) => {
        console.error('Error in Redux:', action.payload);
        return {
          ...state,
          error: {
            message: action.payload.message,
            status: action.payload.response?.status || null,
          },
          isLoading: false,
        };
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        console.log('Redux State:', state);
        return {
          ...state,
          cars: [...action.payload],
          isLoading: false,
        };
      });
    // .addCase(fetchAllCars.pending, (state, action) => {
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: true,
    //   };
    // })
  },
});
export const { setFilter, setFilteredCars, setIsCarsFiltered, setIsLoading } =
  carsSlice.actions;
