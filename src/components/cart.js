import React from 'react'

const Cart = (props) => {

  let { cart, showCart, showingCart } = props
  console.log('CART', cart)
  // let cartTotal = 0
  // cart.reduce(((acc, currVal) =>
  //   cartTotal += acc + currVal.cartTotal
  // ), 0)
  // console.log(cartTotal, "INTHECART")

  return (
    <div className={props.showCart}>
      <div> Cart</div>
      <button onClick={showingCart}>Close</button>
      < div > {cart.map(item => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.quantity}</div>
            <div>${item.price}</div>
            <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
          </div>
        )
      })}</div >
      <div>Total: ${cart.reduce(((acc, currVal) =>
        acc + currVal.cartTotal
      ), 0)
      }</div>
    </div >

  )
}


export default Cart
