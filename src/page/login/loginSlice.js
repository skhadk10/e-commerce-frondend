import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuthorised: false,
  user: {},
  otp: {},
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isloading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = true;
      state.loginResponse = payload || {};
    },
    logOutSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = false;
    },

    updateLogin: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = true;
      state.loginResponse = payload || {};
    },
    userProfile: (state, { payload }) => {
      console.log("from sliceuser", payload);
      state.isLoading = false;
      state.isAuthorised = true;
      state.user = payload.user;
      console.log("from sliceuser", payload.user);
    },
    // OneTimePasswordSuccess: (state, { payload }) => {
    //   state.isLoading = false;

    //   state.otp = payload || {};
    // },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = false;
      state.loginResponse = payload || {};
    },
  },
});
const { reducer, actions } = loginSlice;
export const {
  requestPending,
  loginSuccess,
  logOutSuccess,
  updateLogin,
  requestFail,
  userProfile,
} = actions;
export default reducer;
