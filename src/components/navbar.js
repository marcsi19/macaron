import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import cartIcon from '../img/cart_icon.svg'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'> <img
            src={logo}
            alt="Cart"
            height="22px"
          /></Link>
          <Link to="/menu">Menu</Link>
          <Link to="/beverages">Beverages</Link>
          <Link to="/gifts">Gifts</Link>
          <span>|</span>
          {/* <Link to="/" ><img
            src={cartIcon}
            alt="Cart"
            height="22px"
            width="20px"
          />Cart</Link> */}
          <button onClick={this.props.showingCart}><img
            src={cartIcon}
            alt="Cart"
            height="22px"
            width="20px"
          />Cart</button>
        </nav>
      </div>
    )
  }
}

export default Navbar;
