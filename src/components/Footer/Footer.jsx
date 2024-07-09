import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import AddProduct from "../../components/AddProduct/AddProduct";
import "./Footer.css";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../redux/reducers/userReducer";

const Footer = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (typeof isAdmin === "undefined") {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer-text">Contact Us</h4>
          <p className="footer-text">Email: thomas.augot@hotmail.fr</p>
          <p className="footer-text">Phone: +34 645 52 12 46</p>
          <p className="footer-text">Address: Corralejo, Spain</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Thomas' React E-Commerce. All rights reserved.</p>
        {isAdmin && (
          <button onClick={handleOpenModal} className="add-product-button">
            Add a Product
          </button>
        )}
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <AddProduct handleCloseModal={handleCloseModal} />
      </Modal>
    </footer>
  );
};

export default Footer;
