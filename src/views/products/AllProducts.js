import React from 'react';
import './Card.css';
import ResumeDBImage from '../../assets/images/ResumeDB.jpg';

function AllProducts() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <div className="ml-auto">
          <button
            type="button"
            className="bg-blue inline-block rounded bg-primary h-fit px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>

      <div className="row d-flex print-section mt-4">
        {Array(18) // Ensure enough cards to see the effect
          .fill()
          .map((_, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center">
              <div className="product-card">
                <h2 className="product-title">Neem & Turmeric</h2>
                <div className="product-image">
                  <img src={ResumeDBImage} alt="Product" />
                </div>
                <div className="product-details mt-2">
                  <div className="product-rating">
                    <span className="rating">4.5</span>
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="product-price">MRP: $99.99</div>
                  <div className="product-price">SP: $89.99</div>
                  {/* <button className="add-to-cart-btn">Add to Cart</button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllProducts;
