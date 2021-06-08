
import {
  requestPending,
  addToCartSuccess,deleteCartSuccess,
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
   localStorage.setItem("cartListItem", JSON.stringify(newItem));
    
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const updateAddToCart = (itemlist, qtyselected) => (dispatch) => {
  try {
    const newItem = {
      ...itemlist,
      qtyselected,
    };
    dispatch(requestPending());

    dispatch(addToCartSuccess(newItem));
    
    console.log("from action of cart", addToCartSuccess(newItem));
   localStorage.setItem("cartListItem", JSON.stringify(newItem));
    
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const deleteCart = (item) => (dispatch) => {
  console.log("from action of delete", item);
  try {
   

    dispatch(deleteCartSuccess(item));
    
    console.log("from action of cart", deleteCart(item));
   localStorage.removeItem("cartListItem", JSON.stringify(item));
    
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};


