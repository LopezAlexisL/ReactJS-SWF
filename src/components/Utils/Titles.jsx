import React from 'react'
import { Link } from 'react-router-dom'
import './title.css'

function Titles() {
  return (
    <h3>
        <Link to='/' className='title'> Star Wars Funko</Link>
    </h3>
  )
}

export default Titles