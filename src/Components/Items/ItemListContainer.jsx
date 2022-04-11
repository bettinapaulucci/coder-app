import * as React from 'react'
import { useState, useEffect } from 'react';
import MostrarProductos from '../Utils/MostrarProductos';
import Productos from '../Utils/Productos';
import ItemList from '../Items/ItemList'
import s from '../Items/ItemListContainer.module.css'

export default function ItemListContainer() {
const [Items, setItems] = useState([]);

  useEffect (() => {
    MostrarProductos (2000, Productos)
    .then(res => setItems (res))
    .catch(error => console.log(error));
  }, [Items])

  return (
    <>
    <div className= {s.containerI}> <ItemList productos= {Items} /></div>
    
    </>
  );
}