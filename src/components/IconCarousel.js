import React from 'react';

import IconRestaurant from 'Images/icon-restaurant.png';
import IconWholesale from 'Images/icon-wholesale.png';
import IconManufacturing from 'Images/icon-manufacturing.png';
import IconConstruction from 'Images/icon-construction.png';
import IconTrucking from 'Images/icon-trucking.png';
import IconRetail from 'Images/icon-retail.png';

const IconCarousel = (props) => (
  <div data-uk-slider>
    <ul className='uk-slider-items uk-child-width-1-3@s uk-grid uk-margin'>
      <li>
        <img data-src={IconRestaurant} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
      <li>
        <img data-src={IconWholesale} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
      <li>
        <img data-src={IconManufacturing} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
      <li>
        <img data-src={IconConstruction} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
      <li>
        <img data-src={IconTrucking} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
      <li>
        <img data-src={IconRetail} alt='' data-uk-img />
        <div className='uk-padding-small uk-text-primary'>Lorem Ipsum</div>
      </li>
    </ul>

    <div className="uk-flex uk-flex-center uk-flex-around uk-flex-row">
      <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-left' data-uk-slider-item="previous" />
      <ul className="uk-slider-nav uk-dotnav" />
      <a href="#" style={{color: "rgb(102, 102, 102)"}} data-uk-icon='chevron-right' data-uk-slider-item="next" />
    </div>
  </div>
);

export default IconCarousel;
