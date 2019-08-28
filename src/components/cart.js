import React from 'react'

const Cart = (props) => {

  let { cart } = props
  let style1 = { dislay: 'visible' }
  let style2 = { display: 'none' }

  let style = props.showCart ? style1 : style2
  console.log('style', style)
  console.log('CARTCART', cart)
  console.log('showingStyleCart', props.showCart)

  return (
    <div>
      <div style={style1}> Cart</div>
      < div > {cart.map(item => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
          </div>
        )
      })}</div >
    </div>

  )
}


export default Cart
