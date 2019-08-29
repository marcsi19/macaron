import React, { Component } from 'react'
import facebook from '../img/facebook_icon.svg'
import twitter from '../img/twitter_icon.svg'
import instagram from '../img/instagram_icon.svg'

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div>We are committed to serving the freshest, most delightful treats.</div>
          <div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
          <div>© 2019 MACARONS</div>
        </div>
        <div>
          <div>Company</div>
          <ul>
            <li>About</li>
            <li>Locations</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <div>Orders</div>
          <ul>
            <li>Order Tracker</li>
            <li>Delivery FAQ</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
