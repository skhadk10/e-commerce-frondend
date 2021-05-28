import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  cartList: [],
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
      const itemexist = state.cartList?.find(
        (item) => item._id === payload._id
      );

      if (itemexist) {
        state.cartList = state.cartList?.map((row) =>
          row._id === itemexist._id ? payload : row
        );
      } else {
        state.cartList.push(payload);
      }
      console.log("from SLice hai", itemexist);
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
