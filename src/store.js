import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/page/login/loginSlice";
import CreateAUserReducer from "../src/page/create-login/CreateLoginSlice";
import ProductReducer from "../src/page/product/productSlice";
const store = configureStore({
  reducer: {
    Login: loginReducer,
    newUser: CreateAUserReducer,
    displayProduct: ProductReducer,
  },
});
export default store;
