import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
function Item(props) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className='card_container'>
      <img src={props.img} alt={props.name} />

      <p>
        {props.name}
      </p>

      <button onClick={() => setShowDetail(!showDetail)}><Link className="link" to={`/item/${props.id}`}>View Details</Link></button>

    </div>
  )
}

export default Item