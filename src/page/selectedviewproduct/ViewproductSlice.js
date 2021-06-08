import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  selectedproDisplayList: [],
  status: "",
  message: "",
};
const viewproductSlice = createSlice({
  name: "prodDisplay",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    productfetchBySlug: (state, { payload }) => {
      state.isLoading = false;
      state.selectedproDisplayList = payload.product || [];
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = viewproductSlice;
export const {
  requestPending,

  productfetchBySlug,
  requestFail,
} = actions;
export default reducer;
