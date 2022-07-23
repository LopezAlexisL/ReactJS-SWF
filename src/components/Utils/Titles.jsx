import React from 'react'
import { Link } from 'react-router-dom'
import './title.css'

function Titles() {
  return (
    <h3 className='title'>
      <Link to='/' className='title_link'> Star Wars Funko</Link>
    </h3>
  )
}

export default Titles