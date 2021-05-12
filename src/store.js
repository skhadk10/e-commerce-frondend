import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/page/login/loginSlice";
const store = configureStore({
  reducer: {
    Login: loginReducer,
  },
});
export default store;
