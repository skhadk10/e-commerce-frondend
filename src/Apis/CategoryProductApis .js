import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const catFetch = rooturl + "productdisplay";
// geting category from backend   and display
export const fetchAProductByCatIdApis = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catFetch + "/" + _id);
      console.log("from category API", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
