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


