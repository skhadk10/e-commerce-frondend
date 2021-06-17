import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const catFetch = rooturl + "Categoryproductdisplay";
// geting category from backend   and display
export const getProductByCategory = (_id) => {
  console.log("from api passing id");
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catFetch + "/" + _id);


      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
