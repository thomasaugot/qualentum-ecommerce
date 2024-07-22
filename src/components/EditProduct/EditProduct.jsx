import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProductThunk } from "../../store/slices/productSlice";
import "./EditProduct.css";

const EditProduct = ({ product, handleCloseModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });

  const onSubmit = (data) => {
    const updatedProduct = {
      ...data,
      rating: {
        rate: data["rating.rate"],
        count: data["rating.count"],
      },
    };
    dispatch(editProductThunk(updatedProduct));
    handleCloseModal();
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
