import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const prodFetch = rooturl + "productdisplay";
// geting product from backend   and display
export const fetchAProductApis = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodFetch);
      // console.log("from API", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
