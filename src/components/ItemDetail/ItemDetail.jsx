import React, { useContext } from 'react'
import Counter from '../ItemCounter/Counter'
import CartContext from '../Utils/CartContext'
import './ItemDetail.css'


function ItemDetail(props) {
  const { addItem } = useContext(CartContext)

  function handleAdd(prod, cant) {
    const newitem = { ...prod, quantity: cant }
    addItem(newitem)
  }

  return (
    <div className="itemdetail_container">

      <div className="leftSide">
        <img src={props.img} alt={props.name} />
      </div>

      <div className="rightSide">
        <h2>
          {props.name}
        </h2>
        <p>
          {props.side}
        </p>
        <h3>
          {props.price}$
        </h3>
        <div className="itemCount">
          <Counter stock={props.stock} prod={props} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail