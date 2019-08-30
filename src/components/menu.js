import React, { Component } from 'react'
import Product from './product'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    let { menuItems, addToCart, buttonText } = this.props


    return (
      <div className="menu_main">
        <h3>Menu</h3>
        <div >
          {menuItems.map(product => {
            return (
              //     <div key={product.id} value={product}>
              //       <img src={product.image} />
              //       <div>{product.title}</div>
              //       <div>{product.quantity}</div>
              //       <div>{product.description}</div>
              //       <div>${product.price} /ea.</div>
              //       <button type="submit" onClick={() => addToCart(product)}>{buttonText[product.id - 1]}</button>
              //     </div>
              //   )
              // }
              <Product product={product} key={product.id} addToCart={addToCart} buttonText={buttonText} toggle={this.toggle} open={this.state.open} />
            )
          }
          )}

        </div>

      </div>
    )
  }
}

export default Menu;


