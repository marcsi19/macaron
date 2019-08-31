import React from 'react'

const cartItem = (props) => {

  const { product, removeFromCart } = props
  return (
    <div key={product.id}>
      <div className="cart_product_main" >
        <div className="cart_product_img">
          <img src={product.image} alt="product" />
        </div>
        <div className="cart_product_description">
          <h3>{product.title}</h3>
          <h4>{product.subTitle}</h4>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
        <div className="cart_product_price">${product.price}</div>
      </div>
    </div>
  )
}

export default cartItem
