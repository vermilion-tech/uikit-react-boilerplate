import React from 'react';

import MonetcapLogo from 'Images/monet-cap-logo.png'

const Navbar = (props) => (
<nav className='uk-position-absolute uk-width-expand uk-navbar-container' data-uk-navbar>
  <div className='uk-navbar-left'>
    <div className='uk-navbar-item'>
      <a href='#' className='uk-navbar-item uk-navbar-logo uk-width-small'>
        <img data-src={MonetcapLogo} alt='logo' width='1920' height='1080' data-uk-img />
      </a>

    </div>
  </div>

  <div className='uk-navbar-right uk-visible@s'>
    <ul className='uk-navbar-nav'>
      <li> <a href='#'>
        <button className='uk-button uk-button-primary uk-border-rounded'>Contact Us</button>
      </a> </li>

      <li> <a href='#'>
        <i className='material-icons uk-margin-small-right uk-text-primary'>phone</i>
        1-800-377-5554
      </a> </li>
    </ul>
  </div>
</nav>
);

export default Navbar;
