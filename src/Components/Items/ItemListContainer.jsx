import * as React from 'react'
import { useState, useEffect } from 'react';
import MostrarProductos from '../Utils/MostrarProductos';
import ItemList from '../Items/ItemList';
import { useParams } from 'react-router-dom';
import s from '../Items/ItemListContainer.module.css'

const ItemListContainer = () => {
const [Productos, setProductos] = useState([]);

const {category} = useParams();

  useEffect(() => {
    MostrarProductos (category)
    .then(res => setProductos (res))
    .catch(error => console.log(error));
  }, [category]);

  return (
    <>
    <div className= {s.containerI}> <ItemList productos= {Productos} /></div>
    
    </>
  );
}
export default ItemListContainer