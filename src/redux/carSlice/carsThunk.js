import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://655c964f25b76d9884fd94e9.mockapi.io/api/cars/
// axios.defaults.baseURL =
//   'https://655c964f25b76d9884fd94e9.mockapi.io/api/cars/';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://655c964f25b76d9884fd94e9.mockapi.io/api/cars/cars/'
      );
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
