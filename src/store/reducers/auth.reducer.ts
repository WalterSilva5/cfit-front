import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './states/auth-initial.state';

const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
    refreshTokenSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { loginSuccess, logout, refreshTokenSuccess, updateUser } = authSlice.actions;

export default authSlice.reducer;
