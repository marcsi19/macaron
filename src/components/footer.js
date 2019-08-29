import React, { Component } from 'react'
import facebook from '../img/facebook_icon.svg'
import twitter from '../img/twitter_icon.svg'
import instagram from '../img/instagram_icon.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer_main">
        <div className="footer_left">
          <h3>We are committed to serving the freshest, most delightful treats.</h3>
          <div className="footer_media">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
          <p>© 2019 MACARONS</p>
        </div>
        <div className="footer_right">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Locations</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4>Orders</h4>
            <ul>
              <li>Order Tracker</li>
              <li>Delivery FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
