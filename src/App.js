import React from 'react'

import MonetcapLogo from 'Images/monet-cap-logo.png'
import HeroImage from 'Images/hero.jpg'
import BackgroundImage1 from 'Images/teal-bg-image-1.png'
import BackgroundImage2 from 'Images/teal-bg-image-2.png'

export default (props) => {
  return (
    <React.Fragment>
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

      <div className='uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-background-norepeat uk-background-cover' data-src={HeroImage} width='1920' height='1080' data-uk-img>
        <div className='uk-padding'>
          <div className='uk-light'>
            <h1>We know your time is important.</h1>
          </div>

          <div className='uk-child-width-1-2@s' data-uk-grid>

            <div className='uk-light'>
              <p className='uk-margin-small-right'>
                Monet Capital offers small business loans from $10,000 - $250,000, Apply now and we'll get you the money needed to fund your business within 24 hours!
              </p>
            </div>

            <div>
              <form className='uk-flex uk-flex-middle uk-flex-right'>
                <select className='uk-select uk-width-expand'>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <button className='uk-button uk-button-primary uk-flex-1' type='button'>Apply Now</button>
              </form>
            </div>

          </div>

        </div>

        <div className='uk-position-bottom uk-text-center uk-padding-small uk-background-primary uk-light'>
          Time is Monet. Fund your business now.
        </div>
      </div>

      <div className='uk-section uk-section-large'>
        <div className='uk-container uk-text-center'>
          <h1 className='uk-margin-large uk-text-primary'>Some Industries We Serve</h1>

          <div data-uk-slider>
            <ul className='uk-slider-items uk-child-width-1-3@s uk-grid uk-margin'>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080?text=%20' width='1920' height='1080' alt='' data-uk-img />
                  <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
                </div>
              </li>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080?text=%20' width='1920' height='1080' alt='' data-uk-img />
                  <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
                </div>
              </li>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080?text=%20' width='1920' height='1080' alt='' data-uk-img />
                  <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
                </div>
              </li>
            </ul>

            <div className="uk-flex uk-flex-center uk-flex-around uk-flex-row">
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-left' data-uk-slider-item="previous" />
              <ul className="uk-slider-nav uk-dotnav" />
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-right' data-uk-slider-item="next" />
            </div>
          </div>
        </div>
      </div>

      <div className='uk-section uk-section-small uk-background-cover uk-background-norepeat' data-src={BackgroundImage2} data-uk-img>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center uk-text-primary'>What People Say</h1>
          </div>

          <div data-uk-slider>
            <ul className='uk-slider-items uk-child-width-1-3@s uk-grid uk-margin'>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080/888?text=%20' width='1920' height='1080' alt='' data-uk-img />
                </div>
              </li>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080/888?text=%20' width='1920' height='1080' alt='' data-uk-img />
                </div>
              </li>
              <li>
                <div className='uk-border-1'>
                  <img data-src='https://via.placeholder.com/1920x1080/888?text=%20' width='1920' height='1080' alt='' data-uk-img />
                </div>
              </li>
            </ul>

            <div className="uk-flex uk-flex-center uk-flex-around uk-flex-row">
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-left' data-uk-slider-item="previous" />
              <ul className="uk-slider-nav uk-dotnav" />
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-right' data-uk-slider-item="next" />
            </div>
          </div>
        </div>
      </div>

      <div className='uk-section uk-section-large'>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center uk-text-primary'>About Us</h1>
          </div>

          <ul data-uk-accordion>
            <li>
              <a className='uk-accordion-title uk-text-primary uk-padding' href='#'>Item 1</a>
              <div className='uk-accordion-content uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a className='uk-accordion-title uk-text-primary uk-padding' href='#'>Item 2</a>
              <div className='uk-accordion-content uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a className='uk-accordion-title uk-text-primary uk-padding' href='#'>Item 3</a>
              <div className='uk-accordion-content uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='uk-section uk-section-large uk-background-cover uk-background-norepeat' data-src={BackgroundImage1} data-uk-img>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center uk-light'>Partners</h1>
          </div>
          <div className="uk-child-width-1-2@m uk-grid-match uk-grid" data-uk-grid>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">Lorem ipsum</h3>
                <p className="uk-margin-bottom uk-text-left">Example card text for
                partners section, let's make this a few lines.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">Lorem ipsum</h3>
                  <p className="uk-margin-bottom uk-text-left">Example card text for
                  partners section, let's make this a few lines.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">Lorem ipsum</h3>
                  <p className="uk-margin-bottom uk-text-left">Example card text for
                  partners section, let's make this a few lines.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">Lorem ipsum</h3>
                  <p className="uk-margin-bottom uk-text-left">Example card text for
                  partners section, let's make this a few lines.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>

  )
}
