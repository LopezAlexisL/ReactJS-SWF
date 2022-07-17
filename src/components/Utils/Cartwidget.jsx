import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import CartContext from './CartContext';

function Cartwidget() {

  const { numOfProd } = useContext(CartContext)

  return (
    <div>
        <Link to={'/cart'}>
            <FaShoppingCart />
            {numOfProd}
        </Link>
    </div>
  )
}

export default Cartwidget