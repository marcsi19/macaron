import React from 'react'


const Product = (props) => {

  let { product, addToCart, buttonText, toggle, open } = props
  let addToCartClass = buttonText[product.id - 1] !== "+ Add to Cart" ? "added_to_cart" : "add_to_cart"

  return (
    <div className="menu_product_main" >
      <div className="menu_product_img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="menu_product_description">
        <h3>{product.title}</h3>
        <h4>{product.subTitle}</h4>
        <div>
          {product.description.split('\n').map((item, i) =>
            (i === 2) ?
              (<div key={i}>
                <p className={"collapse" + (open ? ' in' : '')}>{item}
                </p>
                <div className="read_div">
                  <button className="read_more in" onClick={toggle}>{open ? "Read Less" : "Read More"}</button>
                </div>
              </div>
              )
              : <p key={i}>{item}</p>
          )
          }
        </div>
      </div>
      <div className="menu_product_shop">
        <p>${product.price} /ea.</p>
        <button className={addToCartClass} type="submit" onClick={() => addToCart(product)}>{buttonText[product.id - 1]}</button>
      </div>
    </div>
  )

}

export default Product;
