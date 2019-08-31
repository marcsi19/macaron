import React from 'react'
import CartItem from './cartItem'


const Cart = (props) => {
  let { cart, showCart, showingCart, removeFromCart } = props

  return (
    <div className="wrapper" id="wrapper">
      <div>
        <button onClick={showingCart} className="cart_close_button">Close</button>
      </div>
      <h2>My Cart</h2>
      < div > {cart.map(product => {
        return (
          <CartItem product={product} removeFromCart={removeFromCart} key={product.id} />
        )
      })}</div >
      <div className="cart_total">Total </div> <div className="cart_total_amount"> ${cart.reduce(((acc, currVal) =>
        acc + (currVal.quantity * currVal.price)), 0).toFixed(2)}</div>
      <button className="checkout_btn">Continue to Checkout</button>
    </div >

  )
}


export default Cart
