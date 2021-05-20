import axios from "axios";

const rooturl = "http://localhost:8000/api/v1/";
const prodFetch = rooturl + "Prodslug";
// geting product from backend   and display

export const fetchAProductApisBySlug = (slug) => {
  console.log("from slugAPI", slug);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodFetch + "/" + slug);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
