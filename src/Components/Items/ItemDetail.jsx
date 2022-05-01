import React, { useState } from 'react';
import s from '../Items/ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import AddToCart from '../Modal/AddToCart';

function ItemDetail({Producto}) {

  const [count, setCount] = useState(0);

  return (
    <>
    <div className={s.containerDetail}>
    <img className= {s.imagenProducto} src={Producto.image} alt= {Producto.name}/>
    <div className={s.containerDetailInfo}>
    <h1 className={s.containerDetailName}>{Producto.name}</h1>
    <div className={s.containerDetailInfoPrice}>
    <h2>${Producto.price}</h2>
    </div>

    <div>
    <p className={s.description}>{Producto.description}</p>
    <ItemCount stock={Producto.stock} initial={1}/>

    <AddToCart
              message='Add to cart'
              btnContent='Add to cart'
              count={count}
              setCount={setCount}
              item={Producto}
            />
    </div>
    </div>
    </div>
    </>
  )
};
export default ItemDetail