import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions} from '@mui/material'
import s from '../Items/ItemListContainer.module.css'

export default function Item({id, image, name, description, price, stock}) {
  return (
    <Card className={s.cardI} key={id} sx={{ maxWidth: 300  }}>
      <CardMedia
        component="img"
        alt="productos"
        height="300"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}