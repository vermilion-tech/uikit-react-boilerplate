import React from 'react'
import './Style.scss'

export default (props) => {
  return (
    <React.Fragment>
      <nav className='uk-position-absolute uk-width-expand uk-navbar-container' data-uk-navbar>
        <div className='uk-navbar-left'>
          <div className='uk-navbar-item'>

            <a href='#' className='uk-navbar-item uk-navbar-logo uk-width-small'>
              <img data-src='https://via.placeholder.com/1920x1080?text=%20' alt='logo' width='1920' height='1080' data-uk-img />
            </a>

          </div>
        </div>

        <div className='uk-navbar-right uk-visible@s'>
          <ul className='uk-navbar-nav'>
            <li> <a href='#'>
              <button className='uk-button uk-button-primary'>Contact Us</button>
            </a> </li>

            <li> <a href='#'>
              <span className='uk-margin-small-right uk-text-primary' data-uk-icon='receiver' />
              1-800-377-5554
            </a> </li>
          </ul>
        </div>
      </nav>

      <div className='uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-background-norepeat uk-background-cover' data-src='https://via.placeholder.com/1920x1080?text=%20' width='1920' height='1080' data-uk-img>
        <div className='uk-padding'>
          <div>
            <h1>We know your time is important.</h1>
          </div>

          <div className='uk-child-width-1-2@s' data-uk-grid>

            <div>
              <p className='uk-margin-small-right'>
                Monet Capital offers small business loans from $10,000 - $250,000, Apply now and we'll get you the money needed to fund your business within 24 hours!
              </p>
            </div>

            <div>
              <form className='uk-flex uk-flex-right'>
                <select className='uk-select uk-width-expand'>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <button className='uk-button uk-button-primary uk-width-small' type='button'>Apply Now</button>
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
          <h1 className='uk-margin-large'>Some Industries We Serve</h1>

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

            <div class="uk-flex uk-flex-center uk-flex-around uk-flex-row">
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-left' data-uk-slider-item="previous" />
              <ul className="uk-slider-nav uk-dotnav" />
              <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-right' data-uk-slider-item="next" />
            </div>
          </div>
        </div>
      </div>

      <div className='uk-section uk-section-large uk-background-cover uk-background-norepeat' data-src='https://via.placeholder.com/1920x1080?text=%20' width='1920' height='1080' data-uk-img>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center'>What People Say</h1>
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

            <div class="uk-flex uk-flex-center uk-flex-around uk-flex-row">
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
              <a className='uk-accordion-title uk-text-primary uk-border-1 uk-padding' href='#'>Item 1</a>
              <div className='uk-accordion-content uk-border-1 uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a className='uk-accordion-title uk-text-primary uk-border-1 uk-padding' href='#'>Item 2</a>
              <div className='uk-accordion-content uk-border-1 uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a className='uk-accordion-title uk-text-primary uk-border-1 uk-padding' href='#'>Item 3</a>
              <div className='uk-accordion-content uk-border-1 uk-padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>

  )
}
