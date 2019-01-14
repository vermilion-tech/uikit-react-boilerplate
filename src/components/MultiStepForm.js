import React from 'react';

const MultiStepForm = (props) => (
  <div className='multistepform uk-box-shadow-medium uk-flex'>
    {/* tabs */}
    <div className='uk-width-1-4@s'>
      <ul className='uk-tab-left uk-background-muted uk-margin-remove-bottom' data-uk-tab>
        <li> <a href='#'>$0,000 - $0,000,000</a> </li>
        <li> <a href='#'>How soon?</a> </li>
        <li> <a href='#'>Years in business</a> </li>
        <li> <a href='#'>Monthly revenue</a> </li>
        <li> <a href='#'>Industry</a> </li>
        <li> <a href='#'>Contact information</a> </li>
      </ul>
    </div>

    {/* form content */}
    <div className='uk-background-muted uk-padding uk-width-expand'>
      <h4>Lorem ipsum dolor sit amet?</h4>
      <form className='uk-margin-large-left'>
        {/* Radios */}
        <div className='uk-flex uk-flex-column' data-uk-margin>
          <div>
            <input className='uk-radio uk-margin-small-right' type='radio' name='radio1' />
            <label>Option 1</label>
          </div>
          <div>
            <input className='uk-radio uk-margin-small-right' type='radio' name='radio1' />
            <label>Option 2</label>
          </div>
          <div>
            <input className='uk-radio uk-margin-small-right' type='radio' name='radio1' />
            <label>Option 3</label>
          </div>
          <div>
            <input className='uk-radio uk-margin-small-right' type='radio' name='radio1' />
            <label>Option 4</label>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default MultiStepForm;
