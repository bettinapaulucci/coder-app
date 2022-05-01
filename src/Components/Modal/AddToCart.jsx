import { React, useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Context } from '../Context/CartContext';

const AddToCart = ({ fn, message, btnContent, count, setCount, item, }) => {
  const [open, setOpen] = useState(false);

  const { addToCart } = useContext(Context);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
      >
        {btnContent}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de agregar este producto a tu carrito?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              handleClose();
              addToCart({ ...item, count });
              setCount(1);
            }}
            autoFocus
          >
            ¡Si, acepto!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddToCart;
