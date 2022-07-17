import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ items }) {
  return (
    <div>
      <ul className='cardlist_container'>
        {items.map(item => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  )
}

export default ItemList