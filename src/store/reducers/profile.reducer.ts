import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./states/profile-initial.state";

const profileSlice = createSlice({
  name: "profile",
  initialState: INITIAL_STATE,
  reducers: {
    setProfile: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearProfile: (_state) => {
      return { ...INITIAL_STATE };
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
