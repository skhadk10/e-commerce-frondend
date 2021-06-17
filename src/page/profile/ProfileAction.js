import {
  requestPending,
  requestFail,
  UserProfileSuccess,
} from "./ProfileSlice.js";

import { getUserAPI } from "../../Apis/userProfileApis";

export const UserProfileAction = () => async (dispatch) => {
  try {
    const refreshJWT = localStorage.getItem("ourEcommerceRJWT");
    console.log("from action",refreshJWT)
    dispatch(requestPending());
    const result = await getUserAPI(refreshJWT);
    dispatch(UserProfileSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
