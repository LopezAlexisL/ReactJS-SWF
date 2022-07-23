import React from 'react'
import { NavLink } from 'react-router-dom'
import Cartwidget from '../Utils/Cartwidget'
import Titles from '../Utils/Titles'
import './navbar.css'
function Navbar() {
  return (
    <nav className='nav_container'>
      <div className='nav_title'><Titles /></div>
      <div className='nav_logo'><Cartwidget /></div>
      <ul className='nav_link_list'>
        <NavLink to='/' className='nav_link'>All Funko Star Wars</NavLink>
        <NavLink to="/category/Bright Side" style={{ color: 'white' }} className='nav_link'>Bright Side</NavLink>
        <NavLink to="/category/Dark Side" style={{ color: 'rgb(240, 0, 0)' }} className='nav_link'>Dark Side</NavLink>
        <NavLink to="/category/Neutral" className='nav_link'>Neutral</NavLink>
        <NavLink to="/category/Troopers" style={{ color: 'blue' }} className='nav_link'>Troopers</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar