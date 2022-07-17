import React from 'react'
import { Link } from 'react-router-dom'
import Cartwidget from '../Utils/Cartwidget'
import Titles from '../Utils/Titles' 
import './navbar.css'
function Navbar() {
  return (
    <nav className='nav_container'>
        <div className='nav_title'><Titles /></div>
        <div className='nav_logo'><Cartwidget /></div>
        <ul className='nav_link_list'>
            <Link to='/' className='nav_link'>All Funko Star Wars</Link>
            <Link to="/category/Bright Side" className='nav_link'>Bright Side</Link>
            <Link to="/category/Dark Side" className='nav_link'>Dark Side</Link>
            <Link to="/category/Neutral" className='nav_link'>Neutral</Link>
            <Link to="/category/Troopers" className='nav_link'>Troopers</Link>
        </ul>
    </nav>
  )
}

export default Navbar