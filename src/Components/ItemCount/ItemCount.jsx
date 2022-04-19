import React, { useState } from 'react'
import Button from '@mui/material/Button';
import s from '../ItemCount/ItemCount.module.css'

const ItemCount = ({ stock, initial, addCart }) => {
  const [number, setNumber] = useState(initial);

  const add = () => {
      number < stock && setNumber(number + 1);
  };

  const subs = () => {
      number > initial && setNumber(number - 1);
  };

  const handleClick = () => {
      addCart(number);
  };

  return (
      <div className={s.containerCount}>
          <div className={s.containerButton}>
              <button disabled={number === initial} onClick={subs}>
                  -
              </button>
              <p className={s.number}> {number}</p>
              <button disabled={number === stock} onClick={add}className={s.botonAdding}>
                  +
              </button>
          </div>
          <div>
              <button onClick={handleClick} className={s.add}>
                  Add to cart
              </button>
          </div>
      </div>
  );
};

export default ItemCount;
