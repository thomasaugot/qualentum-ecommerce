import React from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
