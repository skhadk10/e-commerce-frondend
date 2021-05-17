import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/page/login/loginSlice";
import CreateAUserReducer from "../src/page/create-login/CreateLoginSlice";
const store = configureStore({
  reducer: {
    Login: loginReducer,
    newUser: CreateAUserReducer,
  },
});
export default store;
