import axios from "axios";

const API_URL = "http://localhost:3000";

export const createUserAPI = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const editUserAPI = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
};

export const deleteUserAPI = async (userId) => {
  try {
    await axios.delete(`${API_URL}/users/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const loginUserAPI = (email, username) => async () => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, username });
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logoutUserAPI = async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};
