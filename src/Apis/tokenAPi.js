import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const tokenAPIurl = rootUrl + "token";


export const tokenAPI = (token) => {
  return new Promise(async (resolve, reject) => {
    console.log("from token api", token);
    try {
      const { data } = await axios.get(tokenAPIurl, {
        headers: { Authorization: token },
      });


      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
