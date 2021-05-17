import createSlice from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  proDisplayList: [],
  status: "",
  message: "",
};
const productSlice = createSlice({
  name: "prodDisplay",
  initialState,
  reducer: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    productfetchSuccess: (state, { payload }) => {
      (state.isLoading = false), (state.proDisplayList = payload || {});
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      (state.message = payload.message), (state.status = payload.status);
    },
  },
});
const { reducer, actions } = productSlice;
export const { requestPending, productfetchSuccess, requestFail } = actions;
export default reducer;
