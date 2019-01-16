import React from 'react';
import Lorem from 'react-lorem-component'
import LoremIpsum from 'lorem-ipsum'

const LeftRightArrows = (props) => (
  <div className='uk-position-bottom-right uk-padding'>
    <span data-ratio='2' data-uk-icon='chevron-left' />
    <span data-ratio='2' data-uk-icon='chevron-right' />
  </div>
)

const FormStep = (props) => (
  <div>
    <h2 className='monet-text-gold'>{props.heading || LoremIpsum().replace('.', '?')}</h2>
    {props.content || <Lorem seed={props.index} count={1} />}
  </div>
)

const MultiStepForm = (props) => (
  <div className='multistepform uk-box-shadow-medium uk-flex'>
    {/* tabs */}
    <div className=' uk-background-muted uk-width-1-4@s'>
      <ul className='uk-tab-left uk-margin-remove-bottom' data-uk-tab='connect: #form-switcher'>
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
      <ul id='form-switcher' className='uk-switcher uk-margin'>
        {
          Array.from({ length: 6}, (_, i) => <li key={i}> <FormStep index={i} /> </li>)
        }
      </ul>
    </div>
  </div>
);

export default MultiStepForm;
