import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://coursework-rest-api.onrender.com/api';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://coursework-rest-api.onrender.com/api/auth/register',
        credentials
      );
      setAuthHeader(response.data.token);
      Notify.success('Successfully registration. Welcome!');
      return response.data;
    } catch (error) {
      Notify.failure('Registration failed. Please, try again.');
      console.error('Registration failed:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://coursework-rest-api.onrender.com/api/auth/login',
        credentials
      );
      setAuthHeader(response.data.token);
      Notify.success('Successfully login. Welcome!');
      return response.data;
    } catch (error) {
      Notify.failure('Login failed. Please, try again.');
      console.error('Login failed:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(
      'https://coursework-rest-api.onrender.com/api/auth/logout'
    );
    clearAuthHeader();

    Notify.success('See you later!');
  } catch (error) {
    Notify.failure('Something with logging out is happened. Try again.');
    return thunkAPI.rejectWithValue(error.message);
  }
});
