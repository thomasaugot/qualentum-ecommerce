import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCart } from "../../store/slices/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total.toFixed(2);
  };

  const handleFinalizeOrder = () => {
    alert("Order finalized! Thank you for your purchase.");
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="cart-item-quantity">
                  Quantity: {item.quantity}
                </div>
                <div className="cart-item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${getTotalPrice()}</h3>
            <button onClick={handleFinalizeOrder}>Finalize Order</button>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
