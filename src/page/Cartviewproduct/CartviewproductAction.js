import {
  requestPending,
  addToCartSuccess,
  requestFail,
} from "./CartviewproductSlice.js";

export const addtoCart = (itemlist, qtyselected) => (dispatch) => {
  try {
    const newItem = {
      ...itemlist,
      qtyselected,
    };
    dispatch(requestPending());

    dispatch(addToCartSuccess(newItem));
    console.log("from action of cart", addToCartSuccess(newItem));
    newItem && localStorage.setItem("item", JSON.stringify(newItem));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
