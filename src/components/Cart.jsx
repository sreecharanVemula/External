import React, { useContext, useState } from 'react'
import { CartList } from './contexts/CartContext';

function Cart() {
  const [cart, setCart] = useContext(CartList);

  
  return(
    <div>
        <h1>Your Items</h1>
        {
          cart.length==0?<h2>cart is empty</h2>:<div className='d-flex justify-content-around'>
    <div className="cart">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      
      </ul>
    
    </div>
    </div>
        }
    
    </div>
  )
}

export default Cart