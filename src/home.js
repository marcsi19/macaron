import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Menu from './components/menu'
import Cart from './components/cart'
import Navbar from './components/navbar'
// import logo from './img/logo.svg'
// import cartIcon from './img/cart_icon.svg'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      menuItems: [{
        id: 1,
        title: 'Custom Gift Box',
        quantity: 'Assorted Flavors',
        description: `This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes! \n
        We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!`,
        image: require('./img/custom_gift_box.png')
      },
      {
        id: 2,
        title: 'Vanilla Earl Grey Macaron',
        quantity: '1 Piece',
        description: `Our most popular flavor! Each macaron is filled with earl grey ganache.`,
        image: require('./img/vanilla.png')
      },
      {
        id: 3,
        title: 'Rose Macarons',
        quantity: '1 Piece',
        description: `Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.`,
        image: require('./img/rose.png')
      }],
      cart: [],
      showCart: false
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.showingCart = this.showingCart.bind(this)
  }


  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item]
    })
  }

  removeFromCart(itemId) {
    this.setState({
      cart: this.state.cart.filter(cartItem => cartItem.id !== itemId)
    })
  }

  showingCart() {
    this.setState({
      showCart: !this.state.showCart
    })
  }
  render() {

    return (
      <div>
        <Navbar showingCart={this.showingCart} />
        <div>
          {/* <div className={styles["resizeable-both"]}>{this.state.hello}</div> */}

          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} showCart={this.state.showCart} />
          {/* <Route path="/" render={() => <Cart cart={this.state.cart} removeFromCart={this.state.removeFromCart} showCart={!this.state.showCart} />} /> */}
          <Route path="/menu" render={() => <Menu menuItems={this.state.menuItems} addToCart={this.addToCart} />} />

        </div>
      </div>

    );
  }
}

export default Home;

