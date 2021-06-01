import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  catDisplayList: [],
  catDisplayListById: [],
  status: "",
  message: "",
};
const CategorySlice = createSlice({
  name: "catDisplay",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    categoryfetchSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.catDisplayList = payload.result || [];
    },
    ProductFetchByCategoryId: (state, { payload }) => {
      console.log("from catproduct slice", payload);
      state.isLoading = false;
      state.catDisplayListById = payload.result || [];
      
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = CategorySlice;
export const {
  requestPending,
  categoryfetchSuccess,
  ProductFetchByCategoryId,
  requestFail,
} = actions;
export default reducer;
