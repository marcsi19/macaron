import React from 'react'

const Cart = (props) => {

  let { cart, showCart, showingCart } = props


  return (
    <div className={showCart}>
      <button onClick={showingCart}>Close</button>
      <div>My Cart</div>
      < div > {cart.map(item => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="item" />
            <div>{item.title}</div>
            <div>{item.quantity}</div>
            <div>${item.price}</div>
            <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
          </div>
        )
      })}</div >
      <div>Total: ${cart.reduce(((acc, currVal) =>
        acc + currVal.cartTotal), 0)}</div>
    </div >

  )
}


export default Cart
