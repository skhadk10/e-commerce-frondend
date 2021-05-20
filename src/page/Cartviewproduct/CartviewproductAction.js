import {
  requestPending,
  addToCartSuccess,
  requestFail,
} from "./CartviewproductSlice.js";

export const fetchProductToCart = (item) => (dispatch) => {
  try {
    dispatch(requestPending());

    dispatch(addToCartSuccess(item));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
