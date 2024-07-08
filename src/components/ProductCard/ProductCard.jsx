import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../Modal/Modal";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import useProducts from "../../hooks/useProducts";
import EditProduct from "../EditProduct/EditProduct";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user, isAdmin } = useContext(AuthContext);
  const { deleteProduct, updateProduct, handleInputChange } = useProducts();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    setShowEditModal(true);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteProduct(product.id);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProduct(editedProduct);
    setShowEditModal(false);
  };

  const handleEditInputChange = (e) => {
    handleInputChange(e);
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
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
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
