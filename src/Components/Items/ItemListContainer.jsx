import * as React from 'react'
import { useState, useEffect } from 'react';
import MostrarProductos from '../Utils/MostrarProductos';
import ItemList from '../Items/ItemList';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import s from '../Items/ItemListContainer.module.css'

const ItemListContainer = () => {
const [Productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {category} = useParams();

  useEffect(() => {
    setLoading(true);
    MostrarProductos (category)
    .then((res) => setProductos (res))
    .catch((error) => console.log(error))
    .finally(() => {
      setLoading(false);
    });
  }, [category]);

  return (
    <>
    <div className= {s.containerI}> 
      {loading ? <CircularProgress color="inherit" /> : (<ItemList productos= {Productos} />)}
    </div>
    
    </>
  );
}
export default ItemListContainer