import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "Clientuser";

export const CreateloginAPI = (formDt) => {
  console.log(">>>>>>>",formDt);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catApi, formDt);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
