import React, { useState } from 'react'
import Button from '@mui/material/Button';
import s from '../ItemCount/ItemCount.module.css'


export default function ItemCount({stock}) {
    const [count, setCount] = useState(0)

    function adding () {
        if (count < stock) {
        setCount (count + 1); }
    }

    function subs () {
        if (count > 0) {
        setCount (count - 1); }
    }

    function onAdd () {
      if (count > 0) {
        alert ('Agregaste ' + count + ' productos a tu carrito'); }
      else {
        alert ('No agregaste productos a tu carrito')
      }

    }

  return (
    <>
    
      <div className={s.botonesCount}>
      <Button onClick={subs} variant="outlined" size="small" className={s.botonSubs} >-</Button>
      <p> {count} </p>
      <Button onClick={adding} variant="outlined" size="small" className={s.botonAdding}>+</Button>
      </div>
      <div className={s.botonAdd}>
      <Button onClick={onAdd} variant="contained" size="large">Comprar</Button>  
      </div>
    </>
 );
}