import {
  requestPending,
  loginSuccess,
  requestFail,
  logOutSuccess,
  updateLogin,
} from "./loginSlice.js";

import { ClientloginAPI } from "../../Apis/loginApis.js";
import { LogOutApi } from "../../Apis/LogOut.js";
import { tokenAPI } from "../../Apis/tokenAPi.js";


export const sendLogin = (FormData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await ClientloginAPI(FormData);

    const { accessJWT, refreshJWT } = result;
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);

    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const LogOut = (_id) => async (dispatch) => {
  console.log(_id);
  try {
    dispatch(requestPending());

   sessionStorage.removeItem("accessJWT");
   localStorage.removeItem("ourEcommerceRJWT");
    LogOutApi(_id)
    dispatch(logOutSuccess());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const userAutoLogin = () => async (dispatch) => {
  console.log("from userAuto login");
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("ourEcommerceRJWT");

  accessJWT && dispatch(updateLogin());

  if (!refreshJWT) {
    dispatch(logOutSuccess());
  }

  if (!accessJWT && refreshJWT) {
    //call the server to get new access token
    const result = await tokenAPI(refreshJWT);
    console.log(result);

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.accessJwt);
      dispatch(updateLogin());
    }
  }

  // const userDetails = await getUserAPI(refreshJWT);
  // userDetails._id && dispatch(userProfile(userDetails));
};
