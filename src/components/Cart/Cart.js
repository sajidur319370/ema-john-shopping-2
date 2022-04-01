import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteLocalStorage } from "../../utilities/fakedb";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shippingTotal += product.shipping * product.quantity;
  }

  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shippingTotal + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart">
      <h2>Order Summery</h2>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total Price:{total}</p>
        <p>Total Shipping Charge:{shippingTotal}</p>
        <p>Tax: {tax}</p>
        <h4>Grand Total: {grandTotal}</h4>
      </div>
      <button
        onClick={() => {
          deleteLocalStorage();
        }}
        className="clear-cart"
      >
        <p>Clear Cart</p>
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <button className="review-order">
        <p>Review Order</p>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;
