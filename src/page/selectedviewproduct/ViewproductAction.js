import { fetchAProductApisBySlug } from "../../Apis/selectedproductApis.js";
import {
  requestPending,
  productfetchBySlug,
  requestFail,
} from "./ViewproductSlice.js";

export const fetchProductBySLug = (slug) => async (dispatch) => {
  console.log("from action");
  try {
    dispatch(requestPending());
    const result = await fetchAProductApisBySlug(slug);

    dispatch(productfetchBySlug(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
