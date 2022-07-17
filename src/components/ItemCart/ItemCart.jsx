import React from 'react'
import './ItemCart.css'

function ItemCart({prop}) {
  return (
    <div className='item_cart'>
        <h3>Product: {prop.name}</h3>
        <h3>{prop.side}</h3>
        <h3>Precio: {prop.price}</h3>
        <h3>Num of Products {prop.quantity}</h3>
    </div>
  )
}

export default ItemCart