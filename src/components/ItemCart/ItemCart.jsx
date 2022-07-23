import React from 'react'
import './ItemCart.css'

function ItemCart({ prop }) {
  return (
    <div className='item_cart'>
      <div className='item_cart_img'>

        <img src={prop.img} alt={prop.name} />
      </div>
      <div className='item_description item_description_product'>
        <h3>Product: </h3>
        <p>{prop.name}</p>
      </div>
      <div className='item_description item_description_side'>

        <h3>{prop.side}</h3>
      </div>
      <div className='item_description item_description_price'>

        <h3>Price: </h3>
        <p>${prop.price}</p>
      </div>
      <div className='item_description item_description_quantity'>

        <h3>Quantity: </h3>
        <p>{prop.quantity}</p>
      </div>
    </div>
  )
}

export default ItemCart