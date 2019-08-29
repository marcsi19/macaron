import React from 'react'


const Product = (props) => {

  let { product, addToCart, buttonText } = props
  let addToCartClass = buttonText[product.id - 1] !== "+ Add to Cart" ? "added_to_cart" : "add_to_cart"
  return (
    <div className="menu_product_main" >
      <div className="menu_product_img">
        <img src={product.image} />
      </div>
      <div className="menu_product_description">
        <h3>{product.title}</h3>
        <h4>{product.quantity}</h4>
        <p>{product.description.split('\n').map((item, i) => <p key={i}>{item}</p>)}</p>
      </div>
      <div className="menu_product_shop">
        <p>${product.price} /ea.</p>
        <button className={addToCartClass} type="submit" onClick={() => addToCart(product)}>{buttonText[product.id - 1]}</button>
      </div>
    </div>
  )

}

export default Product;
