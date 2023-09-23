import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile.reducer";
import searchHistoryReducer from "./reducers/search-history.reducer";
import authReducer from "./reducers/auth.reducer";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    searchHistory: searchHistoryReducer,
    auth: authReducer,
  },
});

export default store;