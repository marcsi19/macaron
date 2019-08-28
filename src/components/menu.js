import React, { Component } from 'react'
import Product from './product'

class Menu extends Component {

  render() {
    let menuItems = this.props.menuItems
    let addToCart = this.props.addToCart

    return (
      <div>
        <h3>Menu</h3>
        {/* <form onSubmit={addToCart}> */}
        <div>

          {menuItems.map(product => {
            return (
              <div key={product.id} value={product}>
                {product.title}

                <button type="submit" onClick={() => addToCart(product)}>Add to Cart</button>
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


