import {
  fetchAProductApis,
  fetchAProductApisBySlug,
} from "../../Apis/productApis.js";
import {
  requestPending,
  productfetchSuccess,
  productfetchBySlug,
  requestFail,
} from "./productSlice.js";

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await fetchAProductApis();
    console.log("from action with result", result);
    dispatch(productfetchSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
