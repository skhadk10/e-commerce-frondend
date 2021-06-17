import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const catFetch = rooturl + "Category";
// geting category from backend   and display
export const fetchAcategoryApis = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catFetch);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
