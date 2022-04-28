import React, { useEffect, useState } from 'react';
import ItemDetail from '../Items/ItemDetail';
import { MostrarDetalle } from '../Utils/MostrarDetalle';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [Producto, setProducto] = useState({});

    const { id } = useParams();

    useEffect(() => {
    MostrarDetalle(id)
        .then((res) => {
        setProducto(res);

    });

      }, [id]);

    

  return (
    <>
    <ItemDetail Producto={Producto} />
    </>
  )
}


export default ItemDetailContainer