import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchProducts,
} from "../api/products";

const useProductActions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNewProduct = async (newProduct) => {
    try {
      setLoading(true);
      await dispatch(addProduct(newProduct));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const modifyProduct = async (product) => {
    try {
      setLoading(true);
      dispatch(editProduct(product));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (product) => {
    try {
      setLoading(true);
      dispatch(deleteProduct(product));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      dispatch(fetchProducts());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    addNewProduct,
    modifyProduct,
    removeProduct,
    getProducts,
  };
};

export default useProductActions;
