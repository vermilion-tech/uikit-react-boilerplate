import React from 'react';
import Lorem from 'react-lorem-component'
import LoremIpsum from 'lorem-ipsum'

const LeftRightArrows = (props) => (
  <div className='uk-position-bottom-right uk-padding'>
    <a href='#' data-uk-switcher-item='previous' data-uk-icon='icon: chevron-left; ratio: 1.5' />
    <a href='#' data-uk-switcher-item='next' data-uk-icon='icon: chevron-right; ratio: 1.5' />
  </div>
)

const FormStep = (props) => (
  <div className='uk-margin'>
    <h2 className='monet-text-gold'>{props.heading || LoremIpsum().replace('.', '?')}</h2>
    <div>
      {props.content || <Lorem seed={props.index} count={1} />}
    </div>
  </div>
)

const MultiStepForm = (props) => (
  <div className='multistepform uk-box-shadow-medium uk-flex'>
    {/* tabs */}
    <div className=' uk-background-muted uk-width-1-4@s'>
      <ul className='uk-tab uk-tab-left uk-margin-remove-bottom' data-uk-switcher='connect: .form-switcher'>
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
      <ul className='form-switcher uk-switcher'>
        {
          Array.from({ length: 6 }, (_, i) => (
            <li key={i}>
              <FormStep index={i} />
              <LeftRightArrows />
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default MultiStepForm;
