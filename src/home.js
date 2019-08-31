import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Menu from './components/menu'
import Cart from './components/cart'
import Navbar from './components/navbar'
import Footer from './components/footer'
import menuItem from './components/data'



const defaultState = {
  menuItems: menuItem,
  cart: [],
  showCart: false,
  homepageClass: "homepage",
  buttonText: ["+ Add to Cart", "+ Add to Cart", "+ Add to Cart"],
}
class Home extends Component {
  constructor() {
    super()
    this.state = defaultState
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.showingCart = this.showingCart.bind(this)
  }


  addToCart(item) {
    let itemId = item.id - 1
    let buttonText = this.state.buttonText.map((elem, i) =>
      i === itemId ? "\u2713 Added to Cart" : elem
    )
    if (this.state.cart.filter(cartItem => cartItem.id === item.id).length) {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.toggle('is-nav-open')

      this.setState({
        cart: [...this.state.cart.map(cartItem => {
          if (cartItem.id === item.id) {
            cartItem.quantity++
          }
          return cartItem
        })],
        showCart: true,
        homepageClass: "homepage homepage_cart",
        buttonText: buttonText
      })

    } else {
      item.quantity++

      const wrapper = document.getElementById('wrapper');
      wrapper.classList.toggle('is-nav-open')

      this.setState({
        cart: [...this.state.cart, item],
        showCart: true,
        homepageClass: "homepage homepage_cart",
        buttonText: buttonText
      })
    }
  }

  async removeFromCart(itemId) {
    this.setState({
      menuItems: defaultState.menuItems,
      cart: this.state.cart.map(cartItem => {
        if (cartItem.id === itemId) {
          cartItem.quantity = 0
        }
        return cartItem
      }).filter(cartItem => cartItem.id !== itemId),
      buttontext: [...this.state.buttonText, this.state.buttonText[itemId - 1] = "+ Add to Cart"]
    })


  }

  showingCart() {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open')
    this.setState({
      showCart: !this.state.showCart,
      homepageClass: !this.state.showCart ? "homepage homepage_cart" : "homepage",
    })
  }
  render() {
    let quantity = this.state.cart.reduce(((acc, currVal) =>
      acc + currVal.quantity), 0)
    return (
      <div>
        <div className={this.state.homepageClass}>
          <Navbar showingCart={this.showingCart} quantity={quantity} />
          <Route path="/menu" render={() => <Menu menuItems={this.state.menuItems} addToCart={this.addToCart} buttonText={this.state.buttonText} />} />
          <Footer />
        </div>
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} showCart={this.state.showCart} showingCart={this.showingCart} />
      </div >

    );
  }
}

export default Home;

