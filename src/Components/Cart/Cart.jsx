import React, { useContext } from 'react';
import { Context } from '../Context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import s from '../Cart/Cart.module.css'

const CartDetail = (item) => {
  const { cart, removeFromCart, buyAll, } = useContext(Context);

  console.log(cart);

  return (
    <>

<TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={4}>
              <h2>Mi Carrito</h2>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Productos</TableCell>
            <TableCell align="left">Cantidad</TableCell>
            <TableCell align="left">Precio por Unidad</TableCell>
            <TableCell align="left">Precio Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="left">{item.count}</TableCell>
              <TableCell align="left">${item.price}</TableCell>
              <TableCell align="left">${parseInt(item.price) * parseInt(item.count)} </TableCell>
             <button className={s.botonRemover} onClick={() => removeFromCart(item.id)}> Quitar Producto </button>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left" >Total ${parseInt(item.price) * parseInt(item.count)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="leftt"></TableCell>
            <TableCell align="left">
          <button className={s.botonComprar}>Finalizar Compra{buyAll}</button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


    
    

    </>
)
};
export default CartDetail;