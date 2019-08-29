import React from 'react'


const Product = (props) => {

  let { product, buttonText } = props


  return (
    <div>
      {product.title}

      <button onClick={(e) => props.addToCart(e)}>{buttonText}</button>
    </div>
  )

}

export default Product;
