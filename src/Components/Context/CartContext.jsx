import React, { useState, createContext } from 'react';

export const Context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
  
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));
  };

  const buyAll = () => setCart([]);

  return <>
  <Context.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
    {children};
  </Context.Provider>
    </>
}
export default CartContext
