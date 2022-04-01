import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-item">
      <img src={img} alt="" />
      <div className="product-details">
        <h6 className="product-name">{name}</h6>
        <p className="price">price: ${price}</p>
        <p className="manufacturer">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings}</p>
      </div>
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="button-cart"
      >
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
