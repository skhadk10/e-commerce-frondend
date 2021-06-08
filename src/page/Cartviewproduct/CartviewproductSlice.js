import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  cartList: [],
  status: "",
  message: "",
};
const CartviewproductSlice = createSlice({
  name: "cartListItem",
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
    },
    quantityincrease: (state, { payload }) => {
      console.log("fromcart new Array", payload);
      state.isLoading = false;
      const newArray = state.cartList?.map((item) => {
        if (item._id === payload) {
          item.qtyselected++;
        }
        return item;
      });
    },
    quantitydecrease: (state, { payload }) => {
      state.isLoading = false;
      const newArray = state.cartList?.map((item) => {
        if (item._id === payload) {
          item.qtyselected--;
        }
        return item;
      });
      // state.cartList = newArray;
    },

    deleteCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      // check if item we geting is not equal to payload then it will show empty
      state.cartList = state.cartList?.filter(
        (item) => item._id !== payload._id
      );
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
  deleteCartSuccess,
  quantitydecrease,
  quantityincrease,
  addToCartSuccess,
  requestFail,
} = actions;
export default reducer;
