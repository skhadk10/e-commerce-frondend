import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const checkouturl = rooturl + "checkout";
export const CheckOutApis = (frmDt) => {
  console.log("fromcheckoutapis", frmDt);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(checkouturl, frmDt);
      console.log("fromcheckout>>>>>>", data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
