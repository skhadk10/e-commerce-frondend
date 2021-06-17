import {
  requestPending,
  loginSuccess,
  requestFail,
  logOutSuccess,
  updateLogin,
  userProfile,
} from "./loginSlice.js";

import { ClientloginAPI } from "../../Apis/loginApis.js";
import { LogOutApi } from "../../Apis/LogOut.js";
import { getUserAPI } from "../../Apis/userProfileApis.js";
import { tokenAPI } from "../../Apis/tokenAPi.js";

export const sendLogin = (FormData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await ClientloginAPI(FormData);
    console.log("result from sentlogin actionlogin", result);
    const { accessJWT, refreshJWT } = result;
    console.log(accessJWT, refreshJWT, "..............");
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);

    result.status === "success"
      ? dispatch(loginSuccess(result))
      : dispatch(requestFail(result));
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
    LogOutApi(_id);
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
  // getting token from browser
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("ourEcommerceRJWT");
  // storing the accesstoken in payload
  accessJWT && dispatch(updateLogin());

  if (!refreshJWT) {
    return dispatch(logOutSuccess());
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

  const userDetails = await getUserAPI(refreshJWT);
  console.log("from userProfileAction", userDetails);
  userDetails._id && dispatch(userProfile(userDetails));
};
