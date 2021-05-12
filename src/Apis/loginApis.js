import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const CLApi = rootUrl + "Clientlogin";

export const ClientloginAPI = (formDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(CLApi, formDt);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
