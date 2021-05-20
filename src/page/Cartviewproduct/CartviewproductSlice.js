import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  CartList: [],
  status: "",
  message: "",
};
const CartviewproductSlice = createSlice({
  name: "cartprodDisplay",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    addToCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.CartList = payload || [];
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = CartviewproductSlice;
export const {
  requestPending,

  addToCartSuccess,
  requestFail,
} = actions;
export default reducer;
