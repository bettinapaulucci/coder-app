import React, { useState } from 'react'
import s from '../Items/ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({Producto}) {

  const [number, setNumber] = useState(0);

  const addCart = (cant) => {
      setNumber(cant);
  };

   console.log(number);

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
    {number === 0 ? <ItemCount stock={Producto.stock} initial={1} addCart={addCart} /> : (<Link to='/cart'> Ir al Carrito</Link>)}
    
    </div>
    </div>

    
    </div>
    </>
  )
};
export default ItemDetail