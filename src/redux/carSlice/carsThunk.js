import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://655a29bd6981238d054d358d.mockapi.io/api/adverts/
axios.defaults.baseURL =
  'https://655a29bd6981238d054d358d.mockapi.io/api/adverts/';

export const fetchAllCars = createAsyncThunk(
  'adverts/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
