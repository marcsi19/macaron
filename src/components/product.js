import React from 'react'


const Product = (props) => {

  let product = props.product


  return (
    <div>
      {product.title}
      {/* <form onSubmit={props.addToCart}>
        <input onChange={this.handleChange} /> */}
      <button onClick={(e) => props.addToCart(e)}>Add to Cart</button>
      {/* </form> */}
    </div>
  )

}

export default Product;
