import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./AddProduct.css";
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ handleCloseModal }) => {
  const { addProduct, handleInputChange } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    handleCloseModal();
  };

  const [product, setProduct] = useState({
    id: uuidv4(),
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({ ...product, title: e.target.value });
          }}
          required
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({ ...product, price: e.target.value });
          }}
          step="0.01"
          required
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({ ...product, description: e.target.value });
          }}
          required
        />
        <br />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({ ...product, category: e.target.value });
          }}
          required
        />
        <br />
        <label>Image URL:</label>
        <input
          type="url"
          name="image"
          value={product.image}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({ ...product, image: e.target.value });
          }}
          required
        />
        <br />
        <label>Rating Rate:</label>
        <input
          type="number"
          name="ratingRate"
          value={product.rating.rate}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({
              ...product,
              rating: { ...product.rating, rate: parseFloat(e.target.value) },
            });
          }}
          required
        />
        <br />
        <label>Rating Count:</label>
        <input
          type="number"
          name="ratingCount"
          value={product.rating.count}
          onChange={(e) => {
            handleInputChange(e);
            setProduct({
              ...product,
              rating: { ...product.rating, count: parseInt(e.target.value) },
            });
          }}
          required
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
