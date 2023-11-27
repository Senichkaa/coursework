import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://coursework-rest-api.onrender.com/';

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
  '/api/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/api/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('api/auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/api/auth/logout');
        clearAuthHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
