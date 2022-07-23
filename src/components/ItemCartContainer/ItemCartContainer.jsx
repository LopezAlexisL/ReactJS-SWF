import React, { useContext } from 'react'
import ItemCart from '../ItemCart/ItemCart'
import CartContext from '../Utils/CartContext'

import { Link } from 'react-router-dom'
import './ItemCartContainer.css'

function ItemCartContainer() {
  const { cart, removeItem, totalPrice } = useContext(CartContext)
  const total = totalPrice()

  return (
    <div className='item_cart_container'>
      <h2>Your Cart</h2>

      {cart.length > 0
        ? <>
          {cart.map(item =>
            <div className='cart_container'>
              <div className='item_description'>
                <ItemCart prop={item} />
              </div>
              <div className='delete_button'>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div>
            </div>
          )}
          <div className='total'>
            Total: ${total}
          </div>
          <Link className='checkout' to='/cartcheckout'>End Buy</Link>

        </>
        : <>
          <h1>Empty Cart</h1>
        </>
      }
    </div>
  )
}

export default ItemCartContainer