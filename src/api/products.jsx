import axios from "axios";
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../redux/actions/actionsTypes";

const API_URL = "http://localhost:3000/products";

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, product);
    dispatch({ type: ADD_PRODUCT, payload: response.data });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const editProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${product.id}`, product);
    dispatch({ type: EDIT_PRODUCT, payload: response.data });
  } catch (error) {
    console.error("Error editing product:", error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${productId}`);
    dispatch({ type: DELETE_PRODUCT, payload: productId });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
};
