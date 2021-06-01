import { fetchAcategoryApis } from "../../Apis/CategoryApis.js";
import { getProductByCategory } from "../../Apis/CategoryProductApis .js";

import {
  categoryfetchSuccess,
  categoryfetchSuccessById,
  requestFail,
  requestPending,
} from "./CategorySlice.js";

export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await fetchAcategoryApis();

    dispatch(categoryfetchSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const fetchProductByCatId = (_id) => async (dispatch) => {
  console.log(_id);
  try {
    dispatch(requestPending());
    const result = await getProductByCategory(_id);

    console.log("from  category action with result", result);
    dispatch(categoryfetchSuccessById(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
