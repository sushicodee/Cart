import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setcart] = useState([])

    return(
        <CartContext.Provider value = {{cart,setcart}}>
            {props.children}
        </CartContext.Provider>
    )
}