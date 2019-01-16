import React from 'react';

import MonetcapLogo from 'Images/monet-cap-logo.png'

const Navbar = (props) => (
<nav className='uk-position-absolute uk-width-expand uk-navbar-container' data-uk-navbar>
  <div className='uk-navbar-left'>
    <div className='uk-navbar-item uk-visible@s'>
      <a href='#' className='uk-navbar-item uk-navbar-logo uk-width-small'>
        <img data-src={MonetcapLogo} alt='logo' width='1920' height='1080' data-uk-img />
      </a>
    </div>
    <ul className='uk-navbar-nav uk-hidden@s'>
      <li>
      <a href='#'>
        <i className='material-icons md-36 uk-text-primary'>phone</i>
      </a>
      </li>
    </ul>
  </div>

  <div class="uk-navbar-center uk-hidden@s">
    <a href="/" class="uk-navbar-item uk-logo"><img data-src={MonetcapLogo} alt='logo' width="120" data-uk-img /></a>
  </div>

  <div className='uk-navbar-right'>
    <ul className='uk-navbar-nav uk-visible@s'>
      <li> <a href='#'>
        <button className='uk-button uk-button-primary uk-border-rounded'>Contact Us</button>
      </a> </li>

      <li> <a href='#'>
        <i className='material-icons uk-margin-small-right uk-text-primary'>phone</i>
        1-800-377-5554
      </a> </li>
    </ul>
    <ul className='uk-navbar-nav uk-hidden@s'>
      <li> <a href="#" onClick={(e) => e.preventDefault()} data-uk-toggle='target: #offcanvas-navbar'>
          <i className='material-icons md-36 uk-text-primary'>menu</i>
      </a> </li>
    </ul>
  </div>



    <div id="offcanvas-navbar" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">

          <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
              <li><a href="#services">Partners</a></li>
              <li><a href="#pricing">Apply now</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#contact">Contact us</a></li>
          </ul>

      </div>
    </div>

    </nav>
);

export default Navbar;
