import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user:{},
  otp:{}
};
const UserProfile = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isloading = true;
    },
    UserProfileSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload || {};
    },

    OneTimePasswordSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.otp = payload || {};
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload || {};
    },
  },
});
const { reducer, actions } = UserProfile;
export const {
  requestPending,

  requestFail,
  UserProfileSuccess,
} = actions;
export default reducer;
