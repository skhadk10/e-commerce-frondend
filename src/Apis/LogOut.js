import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "LogOut";

export const LogOutApi = (_id) => {
  console.log("from logout api", _id)
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catApi, { _id });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
