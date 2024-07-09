import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const addProductAPI = async (product) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const editProductAPI = async (product) => {
  try {
    const response = await axios.put(`${API_URL}/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

export const deleteProductAPI = async (productId) => {
  try {
    await axios.delete(`${API_URL}/${productId}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const fetchProductsAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductByIdAPI = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
};
