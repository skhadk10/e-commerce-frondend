import axios from "axios";

const rooturl = "https://localhost:8000/api/v1/";
const prodFetch = rooturl + "productdisplay";

export const fetchProduct = async (_id) => {
  return new Promise((resolve, reject) => {
    try {
      const { data } = await axios.get(prodFetch + "/" + _id);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
