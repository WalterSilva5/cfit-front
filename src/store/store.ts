import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile.reducer";
import searchHistoryReducer from "./reducers/search-history.reducer";
import * as authDuck from './reducers/auth.duck'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    searchHistory: searchHistoryReducer,
    user: authDuck.authReducer,
  },
});

export default store;