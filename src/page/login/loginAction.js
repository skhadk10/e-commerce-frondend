import {
  requestPending,
  loginSuccess,
  requestFail,
} from "../../login/loginSlice.js";

import { ClientloginAPI } from "../Apis/loginApis.js";

export const sendlogin = (FormData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await ClientloginAPI(FormData);

    // const { accessJWT, refreshJWT } = result;
    // accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    // refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);

    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};