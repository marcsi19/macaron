import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Menu from './components/menu'
import Cart from './components/cart'
import Navbar from './components/navbar'
import Footer from './components/footer'



const defaultState = {
  menuItems: [{
    id: 1,
    title: 'Custom Gift Box',
    quantity: 'Assorted Flavors',
    description: `This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes! \n
    We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!`,
    price: 55,
    cartquant: 0,
    cartTotal: 0,
    image: require('./img/custom_gift_box.png')
  },
  {
    id: 2,
    title: 'Vanilla Earl Grey Macaron',
    quantity: '1 Piece',
    description: `Our most popular flavor! Each macaron is filled with earl grey ganache.`,
    price: 3.75,
    cartquant: 0,
    cartTotal: 0,
    image: require('./img/vanilla.png')
  },
  {
    id: 3,
    title: 'Rose Macarons',
    quantity: '1 Piece',
    description: `Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.`,
    price: 3.75,
    cartquant: 0,
    cartTotal: 0,
    image: require('./img/rose.png')
  }],
  cart: [],
  showCart: "cart_hidden",
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
    if (this.state.cart.filter(cartItem => cartItem.id === item.id).length) {
      this.setState({
        cart: [...this.state.cart.map(cartItem => {
          if (cartItem.id === item.id) {
            if (cartItem.cartquant) {
              cartItem.cartquant++
            }
            cartItem.cartTotal = cartItem.price * cartItem.cartquant
          }
          return cartItem
        })],
        showCart: 'cart_showing',
        homepageClass: "homepage homepage_cart",
        buttontext: [...this.state.buttonText[itemId] = "\u2713 Added to Cart"]
      })
    } else {
      item.cartquant++
      item.cartTotal = item.price * item.cartquant
      this.setState({
        cart: [...this.state.cart, item],
        showCart: 'cart_showing',
        homepageClass: "homepage homepage_cart",
        buttontext: [...this.state.buttonText[itemId] = "\u2713 Added to Cart"]
      })
    }
  }

  async removeFromCart(itemId) {
    this.setState({
      menuItems: defaultState.menuItems,
      cart: this.state.cart.map(cartItem => {
        if (cartItem.id === itemId) {
          cartItem.cartquant = 0
          cartItem.cartTotal = cartItem.price
        }
        return cartItem
      }).filter(cartItem => cartItem.id !== itemId),
      buttontext: [...this.state.buttonText, this.state.buttonText[itemId - 1] = "+ Add to Cart"]
    })


  }

  showingCart() {

    if (this.state.showCart === 'cart_hidden') {
      this.setState({
        showCart: 'cart_showing',
        homepageClass: "homepage homepage_cart",
      })
    } else {
      this.setState({
        showCart: 'cart_hidden',
        homepageClass: "homepage",
      })
    }
  }
  render() {

    return (
      <div>
        <div className={this.state.homepageClass}>
          <Navbar showingCart={this.showingCart} />

          <Route path="/menu" render={() => <Menu menuItems={this.state.menuItems} addToCart={this.addToCart} buttonText={this.state.buttonText} />} />

          <Footer />
        </div>

        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} showCart={this.state.showCart} showingCart={this.showingCart} />

      </div >

    );
  }
}

export default Home;

