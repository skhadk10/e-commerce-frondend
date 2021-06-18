import { CheckOutApis } from "../../Apis/CheckOutApis.js";

export const CheckOutAction = (frmDt) => async (dispatch) => {
  console.log("fromcheckout", frmDt);
  try {
    const result = await CheckOutApis(frmDt);
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
