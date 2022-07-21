import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import CartContext from './CartContext';
import './CartWidget.css'

function Cartwidget() {

  const { numOfProd } = useContext(CartContext)

  return (
    <div className='cart_logo_container'>
        <Link className='cart_logo' to={'/cart'}>
            <FaShoppingCart className='logo'/>
            {' '+numOfProd}
        </Link>
    </div>
  )
}

export default Cartwidget