// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css'; // Make sure to create this CSS file for styling

const products = [
  { id: 1, name: 'Product 1', price: 100, image: 'path_to_image1.jpg' },
  { id: 2, name: 'Product 2', price: 200, image: 'path_to_image2.jpg' }
  // Add more product objects here
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
