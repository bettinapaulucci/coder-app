import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail'
import { MostrarDetalle } from '../Utils/MostrarDetalle';

function ItemDetailContainer() {

    const [Producto, setProducto] = useState({});

    useEffect(() => {
    MostrarDetalle().then((res) => {
        setProducto(res);

    });

      }, []);

    

  return (
    <>
    <ItemDetail Producto={Producto} />
    </>
  )
}


export default ItemDetailContainer