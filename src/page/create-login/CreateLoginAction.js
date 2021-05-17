import { CreateloginAPI } from "../../Apis/CreateloginApis.js";
import {
  requestPending,
  loginSuccess,
  requestFail,
} from "./CreateLoginSlice.js";



export const sendCreatelogin = (FormData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await CreateloginAPI(FormData);
    console.log(result);
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
