import * as React from 'react'
import { useState, useEffect } from 'react';
import Promesas from '../Utils/Promesas';
import Productos from '../Utils/Productos';
import ItemList from '../Items/ItemList'
import s from '../Items/ItemListContainer.module.css'


export default function ItemListContainer() {
const [Items, setItems] = useState([]);

  useEffect (() => {
    Promesas (2000, Productos)
    .then(resultado => setItems (resultado))
    .catch(error => console.log(error));
  }, [Items])

  return (
    <>
    <div className= {s.containerI}> <ItemList productos= {Items} /></div>
    
    </>
  );
}