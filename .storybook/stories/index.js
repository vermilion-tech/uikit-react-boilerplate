import React from 'react';
import { storiesOf } from '@storybook/react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';

UIkit.use(Icons)

import 'Stylesheets/main.scss'

// Decorators
const UKSectionContainerDecorator = ({ children }) => (
  <div className='uk-section'>
    <div className='uk-container'>
      { children }
    </div>
  </div>
)

import MultiStepForm from 'Components/MultiStepForm';
storiesOf('MultiStepForm', module)
  .add('Default', () => (
    <UKSectionContainerDecorator>
      <MultiStepForm />
    </UKSectionContainerDecorator>
  ));
