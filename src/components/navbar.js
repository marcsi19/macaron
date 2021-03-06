import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import cartIcon from '../img/cart_icon.svg'

const Navbar = (props) => {

  let quantity = props.quantity
  return (
    <div>
      <nav className="navbar_main">
        <Link to='/' className="navbar_logo"> <img
          src={logo}
          alt="Cart"
          height="22px"
        /></Link>
        <Link to="/menu" className="navbar_menu">Menu</Link>
        <Link to="/beverages" className="navbar_menu">Beverages</Link>
        <Link to="/gifts" className="navbar_menu">Gifts</Link>
        <span className="navbar_menu">|</span>
        <span><img
          src={cartIcon}
          alt="Cart"
          className='cart_svg'
        /></span>
        <button className="cart_nav navbar_menu" onClick={props.showingCart}>
          <span className={quantity ? "cart_circle" : "cart_circle_empty"}>{quantity ? quantity : ""}</span>
          Cart</button>
      </nav>
    </div>
  )

}

export default Navbar;
