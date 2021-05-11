import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
const store = configureStore({
  reducer: {
    Login: loginReducer,
  },
});
export default store;
