import React from "react";
import "./EditProduct.css";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/actions";

const EditProduct = ({
  product,
  handleInputChange,
  handleSubmit,
  handleCloseModal,
}) => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(product));
    handleCloseModal();
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={onSubmit}>
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
          name="rating.rate"
          value={product.rating.rate}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Rating Count:</label>
        <input
          type="number"
          name="rating.count"
          value={product.rating.count}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
