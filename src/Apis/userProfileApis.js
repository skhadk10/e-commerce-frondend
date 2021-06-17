import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const profileUrl = rooturl + "profile";
export const getUserAPI = (token) => {
  console.log("from token", token);
  return new Promise(async (resolve, reject) => {
    try {
        const { data } = await axios.post(profileUrl, token);
         console.log("from token", data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};



