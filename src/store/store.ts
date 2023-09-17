import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile.reducer'
import searchHistoryReducer from './reducers/search-history.reducer'

export default configureStore({
  reducer: {
    profile: profileReducer,
    searchHistory: searchHistoryReducer,
  }
})