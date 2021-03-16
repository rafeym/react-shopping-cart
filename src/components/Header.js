import React, { useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <header>
      <div className='menu' onClick={toggleMenu}>
        <img src={Menu} alt='' width='20' />
      </div>
      <div className='logo'>
        <h1>
          <Link to='/'>Nike</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? 'toggle' : ''}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li className='close' onClick={toggleMenu}>
            <img src={Close} alt='' width='20' />
          </li>
        </ul>
        <div className='nav-cart'>
          <span>0</span>
          <Link to='/cart'>
            <img src={Cart} alt='' width='20' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
