import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './states/auth-initial.state';

const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    loginSuccess: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      state.user = null;
    },
    refreshTokenSuccess: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { loginSuccess, logout, refreshTokenSuccess, updateUser } = authSlice.actions;

export default authSlice.reducer;
