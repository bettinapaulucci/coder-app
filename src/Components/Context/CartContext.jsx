import React, { useState, createContext } from 'react';

export const Context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexItem  !== -1) {
      const newCart = [...cart];
      newCart[indexItem ].count = newCart[indexItem ].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };
  const removeFromCart = (id) => { 
    setCart(cart.filter((item) => item.id !== id));
  };
  const buyAll = () => setCart([]);

  return <>
  <Context.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
    {children};
  </Context.Provider>
    </>
}
export default CartContext
