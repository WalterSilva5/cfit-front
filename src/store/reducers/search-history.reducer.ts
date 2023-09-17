import { createSlice } from '@reduxjs/toolkit';

import { type Profile } from './types/profile.interface';

const INITIAL_STATE: { profiles: Profile[] } = {
  profiles: []
};

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: INITIAL_STATE,
  reducers: {
    addSearchHistory: (state, action) => {
      state.profiles.push(action.payload);
    },
    clearSearchHistory: (_state) => {
      return { ...INITIAL_STATE };
    }
  }
});

export const { addSearchHistory, clearSearchHistory } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
