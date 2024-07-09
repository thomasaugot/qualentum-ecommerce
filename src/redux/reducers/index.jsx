import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
  theme: themeReducer,
});

export default rootReducer;
