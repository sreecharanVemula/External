import React, { useContext } from 'react'
import { useState } from 'react';
import ProductList from './ProductList';
import { CartList } from './contexts/CartContext';

function Home() {
  const [cart, setCart] = useContext(CartList);
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 15 },
    { id: 3, name: 'Product 3', description: 'Description of product 3', price: 20 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  return (
    <div>
        <h1 className='text-success'>Welcome to the Ecommerce shopping cart</h1>
        <h1>HOT DEALS</h1>
         <div className='d-flex justify-content-around'>
          <ProductList products={products} addToCart={addToCart}/>
    </div>
    </div>
  )
}

export default Home