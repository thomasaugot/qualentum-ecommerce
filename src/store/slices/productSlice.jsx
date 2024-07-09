import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductAPI,
  editProductAPI,
  deleteProductAPI,
  fetchProductsAPI,
  getProductByIdAPI,
} from "../../api/products";

export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const data = await addProductAPI(product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProductThunk = createAsyncThunk(
  "products/editProduct",
  async (product, thunkAPI) => {
    try {
      console.log("Editing product:", product); // Log product being edited
      const data = await editProductAPI(product);
      console.log("Edited product data:", data); // Log response data
      return data;
    } catch (error) {
      console.error("Error editing product:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      console.log("Deleting product with ID:", productId); // Log ID being deleted
      await deleteProductAPI(productId);
      return productId; // Return ID to use in reducer
    } catch (error) {
      console.error("Error deleting product:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const data = await fetchProductsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  "products/getProductById",
  async (productId, thunkAPI) => {
    try {
      const data = await getProductByIdAPI(productId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(editProductThunk.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      });
  },
});

export const { setSearchTerm } = productSlice.actions;
export const selectAllProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectSearchTerm = (state) => state.products.searchTerm;

export default productSlice.reducer;
