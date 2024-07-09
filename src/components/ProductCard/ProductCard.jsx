import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import {
  editProductThunk,
  deleteProductThunk,
} from "../../store/slices/productSlice";
import EditProduct from "../EditProduct/EditProduct";
import { selectIsAdmin, selectUser } from "../../store/slices/userSlice";

const ProductCard = ({ product }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    dispatch(deleteProductThunk(product.id));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductThunk(editedProduct));
    setShowEditModal(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
      <div className="product-card-buttons">
        {user && (
          <>
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {isAdmin && (
              <>
                <button className="btn-edit" onClick={handleEditClick}>
                  <IoMdCreate />
                </button>
                <button className="btn-delete" onClick={handleDeleteClick}>
                  <IoMdTrash />
                </button>
              </>
            )}
          </>
        )}
      </div>
      {showEditModal && (
        <Modal show={showEditModal} handleClose={() => setShowEditModal(false)}>
          <EditProduct
            product={editedProduct}
            handleInputChange={handleEditInputChange}
            handleSubmit={handleEditSubmit}
            handleCloseModal={() => setShowEditModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
