import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/page/login/loginSlice";
import CreateAUserReducer from "../src/page/create-login/CreateLoginSlice";
import ProductReducer from "../src/page/product/productSlice";
import viewproductSlice from "../src/page/selectedviewproduct/ViewproductSlice";
import CartProductSlice from "../src/page/Cartviewproduct/CartviewproductSlice";
import categorySlice from "../src/page/category/CategorySlice";
const store = configureStore({
  reducer: {
    Login: loginReducer,
    newUser: CreateAUserReducer,
    displayProduct: ProductReducer,
    selecteddisplayProduct: viewproductSlice,
    cartListItem: CartProductSlice,
    categoryList: categorySlice,
  },
});
export default store;
