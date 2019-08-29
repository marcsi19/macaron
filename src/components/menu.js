import React, { Component } from 'react'
import Product from './product'

class Menu extends Component {

  render() {
    let { menuItems, addToCart, buttonText } = this.props


    return (
      <div>
        <h3>Menu</h3>
        {/* <form onSubmit={addToCart}> */}
        <div>

          {menuItems.map(product => {
            return (
              <div key={product.id} value={product}>
                <img src={product.image} />
                <div>{product.title}</div>
                <div>{product.quantity}</div>
                <div>{product.description}</div>
                <div>${product.price} /ea.</div>
                <button type="submit" onClick={() => addToCart(product)}>{buttonText[product.id - 1]}</button>
              </div>
            )
          }
            // <Product product={product} key={product.id} addToCart={addToCart} />
          )}

        </div>
        {/* </form> */}
      </div>
    )
  }
}

export default Menu;


