import React from 'react'
import Item from './Item'

export default function ItemList({productos}) {
  return (
      productos.map(p => (
          <Item
          id= {p.id}
          key={p.id}
          name= {p.name}
          description= {p.description}
          price= {p.price}
          image= {p.image}  
            />
      ))
  )
}