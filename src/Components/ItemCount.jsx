import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, CardActions, CardContent, Typography} from '@mui/material';
import s from './ItemCount.module.css'


export default function ItemCount({stock}) {
    const [count, setCount] = useState(0)

    function adding () {
        if (count < stock) {
        setCount (count + 1); }
    }

    function subs () {
        if (count > 0) {
        setCount (count - 1); }
    }

    function onAdd () {
        alert ('Agregaste ' + count + ' items a tu carrito');
    }

  return (
    <Card className={s.cardContador} variant="outlined" sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pijama Verde
        </Typography>
      </CardContent>

      <CardActions>
        <div className={s.botonesContador}>
      <Stack direction="row" spacing={5}>
      <Button onClick={subs} variant="contained">-</Button>
      <p> {count} </p>
      <Button onClick={adding} variant="contained">+</Button>
      </Stack>
        </div>
      </CardActions>

      <CardActions>
      <Stack direction="row" spacing={5}>
      <div className={s.botonesContador}>
          <Button onClick={onAdd} variant="contained" >Comprar</Button>
          </div>
      </Stack>
      </CardActions>
</Card>
     
 );
}