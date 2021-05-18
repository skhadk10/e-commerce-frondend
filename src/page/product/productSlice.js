import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  proDisplayList: [],
  status: "",
  message: "",
};
const productSlice = createSlice({
  name: "prodDisplay",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    productfetchSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.proDisplayList = payload.product || [];
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = productSlice;
export const { requestPending, productfetchSuccess, requestFail } = actions;
export default reducer;
