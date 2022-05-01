import React from "react";
import { useState} from "react";
import s from '../ItemCount/ItemCount.module.css'

const ItemCount = ({ stock, initial}) => {
  const [count, setCount] = useState(initial)

  const add = () => {
    count < stock && setCount(count + 1);
  };

  const subs = () => {
    count > initial && setCount(count - 1);
  };


  return (
      <div className={s.containerCount}>
          <div className={s.containerButton}>
              <button disabled={count === initial} onClick={subs}>
                  -
              </button>
              <p className={s.number}> {count}</p>
              <button disabled={count === stock} onClick={add}className={s.botonAdding}>
                  +
              </button>
          </div>  
          </div>
  );
};

export default ItemCount;


