import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOGGLE_DARK_MODE,
  SET_SEARCH_TERM,
  LOGIN_USER,
  LOGOUT_USER,
} from "./actionsTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  payload: product,
});

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});

export const editUser = (user) => ({
  type: EDIT_USER,
  payload: user,
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData,
});

export const logoutUser = (userId) => ({
  type: LOGOUT_USER,
});

export { fetchProducts } from "../../api/products";
