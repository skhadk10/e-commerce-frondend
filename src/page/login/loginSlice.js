import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuthorised:false,
  message2:""
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
      state.isAuthorised= true
      state.loginResponse = payload || {};
    },
    logOutSuccess: (state, { payload }) => {
      state.isLoading = false;
     state.isAuthorised= false
     state.loginResponse = payload
    },
    
    updateLogin: (state, { payload }) => {
      state.isLoading = false;
     state.isAuthorised= true
     state.loginResponse=payload || {}
    },
    
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});
const { reducer, actions } = loginSlice;
export const { requestPending, loginSuccess,logOutSuccess,updateLogin, requestFail } = actions;
export default reducer;
