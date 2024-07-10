import React, { useState } from 'react'
import { CartList } from './CartContext'

function CartStore({children}) {
    const [cart, setCart] = useState([]);
  return (
        <CartList.Provider value={[cart, setCart]}>
            {children}
        </CartList.Provider>
       
  )
}

export default CartStore