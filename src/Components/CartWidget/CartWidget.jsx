import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <Link to='/cart'> <ShoppingCartIcon/> </Link>
    </IconButton>
  );
};

export default CartWidget
