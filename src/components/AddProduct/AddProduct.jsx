import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/actions";
import "./AddProduct.css";
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    handleCloseModal();
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          step="0.01"
          required
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Image URL:</label>
        <input
          type="url"
          name="image"
          value={product.image}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Rating Rate:</label>
        <input
          type="number"
          name="ratingRate"
          value={product.rating.rate}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Rating Count:</label>
        <input
          type="number"
          name="ratingCount"
          value={product.rating.count}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
