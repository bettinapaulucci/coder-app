import React from 'react'
import { Container } from '@mui/material'
import s from '../Items/ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({Producto}) {
  return (
    <>
    <Container fluid>
    <h1>{Producto.name}</h1>
    <img className= {s.imagenProducto} src={Producto.image} alt= {Producto.name}/>
    <h2>${Producto.price}</h2>
    <h5>{Producto.description}</h5>
    
    <ItemCount/>

    </Container>
    </>
  )
};
export default ItemDetail