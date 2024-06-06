// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Make sure to create this CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
