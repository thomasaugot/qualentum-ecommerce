import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductThunk } from "../../store/slices/productSlice";
import "./AddProduct.css";
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      id: uuidv4(),
      ...data,
      rating: {
        rate: data["rating.rate"],
        count: data["rating.count"],
      },
    };
    dispatch(addProductThunk(newProduct));
    handleCloseModal();
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <span>{errors.title.message}</span>}
        <br />

        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: "Price is required", min: 0 })}
        />
        {errors.price && <span>{errors.price.message}</span>}
        <br />

        <label>Description:</label>
        <textarea
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <span>{errors.description.message}</span>}
        <br />

        <label>Category:</label>
        <input
          type="text"
          {...register("category", { required: "Category is required" })}
        />
        {errors.category && <span>{errors.category.message}</span>}
        <br />

        <label>Image URL:</label>
        <input
          type="url"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
              message: "Invalid URL",
            },
          })}
        />
        {errors.image && <span>{errors.image.message}</span>}
        <br />

        <label>Rating Rate:</label>
        <input
          type="number"
          {...register("rating.rate", {
            required: "Rating rate is required",
            min: 0,
          })}
        />
        {errors["rating.rate"] && <span>{errors["rating.rate"].message}</span>}
        <br />

        <label>Rating Count:</label>
        <input
          type="number"
          {...register("rating.count", {
            required: "Rating count is required",
            min: 0,
          })}
        />
        {errors["rating.count"] && (
          <span>{errors["rating.count"].message}</span>
        )}
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
