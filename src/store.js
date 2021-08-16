import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../src/page/login/loginSlice";
import CreateAUserReducer from "../src/page/create-login/CreateLoginSlice";
import ProductReducer from "../src/page/product/productSlice";
import viewproductSlice from "../src/page/selectedviewproduct/ViewproductSlice";
import CartProductSlice from "../src/page/Cartviewproduct/CartviewproductSlice";
import categorySlice from "../src/page/category/CategorySlice";

import { combineReducers } from "redux";
import {
  // persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const reducers = combineReducers({
//   Login: loginReducer,
//   newUser: CreateAUserReducer,
//   displayProduct: ProductReducer,
//   selecteddisplayProduct: viewproductSlice,
//   cartListItem: CartProductSlice,
//   categoryList: categorySlice,
// });

// const persistConfig = {
//   key: "root",
//   storage,

//   // blacklist: ['navigation'], // navigation will not be persisted
//   //  whitelist: ['navigation'], // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

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
