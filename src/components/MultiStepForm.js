import React from 'react';

const Radio = (props) => (
  <div>
    <input className='uk-radio uk-margin-small-right' type='radio' name='radio' />
    <label>Option {props.index}</label>
  </div>
)

const LeftRightArrows = (props) => (
  <div className='uk-position-bottom-right uk-padding'>
    <span data-ratio='2' data-uk-icon='chevron-left' />
    <span data-ratio='2' data-uk-icon='chevron-right' />
  </div>
)

const MultiStepForm = (props) => (
  <div className='multistepform uk-box-shadow-medium uk-flex'>
    {/* tabs */}
    <div className=' uk-background-muted uk-width-1-4@s'>
      <ul className='uk-tab-left uk-margin-remove-bottom' data-uk-tab>
        <li> <a href='#'>$0,000 - $0,000,000</a> </li>
        <li> <a href='#'>How soon?</a> </li>
        <li> <a href='#'>Years in business</a> </li>
        <li> <a href='#'>Monthly revenue</a> </li>
        <li> <a href='#'>Industry</a> </li>
        <li> <a href='#'>Contact information</a> </li>
      </ul>
    </div>

    {/* form content */}
    <div className='uk-background-default uk-padding uk-width-expand uk-position-relative'>
      <h2 className='monet-text-gold'>Lorem ipsum dolor sit amet?</h2>
      <form className='uk-margin-large-left'>
        {/* Radios */}
        <div className='uk-flex uk-flex-column' data-uk-margin>
          {
            Array.from({ length: 4 }, (_, i) => <Radio index={i+1} />)
          }
        </div>

        <LeftRightArrows />
      </form>
    </div>
  </div>
);

export default MultiStepForm;
