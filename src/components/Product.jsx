import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product card m-2">
        <div className="card-body">
            
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className='btn btn-success' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  );
};

export default Product;