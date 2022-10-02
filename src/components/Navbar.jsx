import React from 'react'
import './Navbar.scss'
import cart from '../shopping-cart.png'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Navbar = () => {
  const { totalItems } = useCart()
  return (
    <div className='navbar'>
      <NavLink to='/'>
        <h2 className='logo'>TeeRex Store</h2>
      </NavLink>
      <div className='menu'>
        <h3 className='products'>
          <NavLink to='/'>Products</NavLink>
        </h3>
        <button className='cart-icon'>
          <NavLink to='/cart'>
            <span className='badge'>{totalItems}</span>
            <img src={cart} alt='' />
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Navbar
