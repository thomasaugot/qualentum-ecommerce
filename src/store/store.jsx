import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    user: userReducer,
    products: productReducer,
  },
  devTools: true,
});

export default store;
