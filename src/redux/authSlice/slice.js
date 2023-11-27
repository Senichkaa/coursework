import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout } from "./authThunk";

const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }),
});

export const authReducer = authSlice.reducer;