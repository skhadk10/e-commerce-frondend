import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  ClientloginResponse: {},
};
const loginSlice = createSlice({
  name: "CreateAUser",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isloading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});
const { reducer, actions } = loginSlice;
export const { requestPending, loginSuccess, requestFail } = actions;
export default reducer;
