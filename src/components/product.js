import React from 'react'


const Product = (props) => {

  let { product, buttonText } = props


  return (
    <div>
      {product.title}
      {/* <form onSubmit={props.addToCart}>
        <input onChange={this.handleChange} /> */}
      <button onClick={(e) => props.addToCart(e)}>{buttonText}</button>
      {/* </form> */}
    </div>
  )

}

export default Product;
