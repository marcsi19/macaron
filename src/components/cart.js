import React from 'react'

const Cart = (props) => {


  let { cart, showCart, showingCart, removeFromCart } = props


  return (

    <div className="wrapper" id="wrapper">
      <div>
        <button onClick={showingCart} className="cart_close_button">Close</button>
      </div>
      <h3>My Cart</h3>
      < div > {cart.map(item => {
        return (
          <div key={item.id}>
            <div className="cart_product_main" >
              <div className="cart_product_img">
                <img src={item.image} alt="item" />
              </div>
              <div className="cart_product_description">
                <h3>{item.title}</h3>
                <h4>{item.quantity}</h4>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="cart_product_price">${item.price}</div>
            </div>

          </div>
        )
      })}</div >
      <div className="cart_total">Total </div> <div className="cart_total_amount"> ${cart.reduce(((acc, currVal) =>
        acc + currVal.cartTotal), 0)}</div>
      <button className="checkout_btn">Continue to Checkout</button>
    </div >

  )
}


export default Cart
