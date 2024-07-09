import axios from "axios";
import {
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../redux/actions/actionTypes";

const API_URL = "http://localhost:3000";

export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    dispatch({ type: CREATE_USER, payload: response.data });
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const editUser = (userId, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    dispatch({ type: EDIT_USER, payload: response.data });
  } catch (error) {
    console.error("Error editing user:", error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/users/${userId}`);
    dispatch({ type: DELETE_USER, payload: userId });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export const loginUser = (email, username) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, username });
    dispatch({ type: LOGIN_USER, payload: response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
