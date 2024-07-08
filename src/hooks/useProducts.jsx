import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/products";

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post(API_URL, newProduct);
      setProducts([...products, response.data]);
      setEditedProduct(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedProduct.id}`,
        updatedProduct
      );
      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? response.data : product
      );
      setProducts(updatedProducts);
      setEditedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${API_URL}/${productId}`);
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
      setEditedProduct(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const startEditingProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditedProduct(productToEdit);
  };

  return {
    products,
    editedProduct,
    setEditedProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    handleInputChange,
    startEditingProduct,
    getProducts,
    loading,
  };
};

export default useProducts;
