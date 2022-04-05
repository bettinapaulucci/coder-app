import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions} from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({id, nombre, precio, imagen}) {
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="productos"
        height="300"
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {precio}
        </Typography>
      </CardContent>
      <CardActions>
    <ItemCount stock={5} />
      </CardActions>
    </Card>
  )
}