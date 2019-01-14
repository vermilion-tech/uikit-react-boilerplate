import React from 'react';

const MultiStepForm = (props) => (
  <div className='uk-box-shadow-medium uk-grid-collapse' data-uk-grid>
    {/* tabs */}
    <div className='uk-width-1-4'>
      <ul className='uk-tab-left uk-background-muted' data-uk-tab>
        <li> <a href='#'>$0,000 - $0,000,000</a> </li>
        <li> <a href='#'>How soon?</a> </li>
        <li> <a href='#'>Years in business</a> </li>
        <li> <a href='#'>Monthly revenue</a> </li>
        <li> <a href='#'>Industry</a> </li>
        <li> <a href='#'>Contact information</a> </li>
      </ul>
    </div>

    {/* form content */}
    <div className='uk-width-expand uk-background-muted uk-padding'>
      <h3>Lorem ipsum dolor sit amet?</h3>
    </div>
  </div>
);

export default MultiStepForm;
