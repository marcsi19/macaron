import React from 'react'


const Product = (props) => {

  let { product, addToCart, buttonText } = props

  return (
    <div >
      <img src={product.image} />
      <div>{product.title}</div>
      <div>{product.quantity}</div>
      <div>{product.description}</div>
      <div>${product.price} /ea.</div>
      <button className="addtocart" type="submit" onClick={() => addToCart(product)}>{buttonText[product.id - 1]}</button>
    </div>
  )

}

export default Product;
