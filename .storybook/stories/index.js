import React from 'react';
import { storiesOf } from '@storybook/react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';

UIkit.use(Icons)

import 'Stylesheets/main.scss'

import { withViewport } from '@storybook/addon-viewport'

// Decorators
const UKSectionContainerDecorator = ({ children }) => (
  <div className='uk-section uk-background-default'>
    <div className='uk-container'>
      { children }
    </div>
  </div>
)

import MultiStepForm from 'Components/MultiStepForm';
storiesOf('MultiStepForm', module)
  .addDecorator(withViewport())
  .add('Default - 1920x1080', () => (
    <UKSectionContainerDecorator>
      <MultiStepForm />
    </UKSectionContainerDecorator>
  ), { viewport: 'res19201080' })
  .add('Default - iPad', () => (
    <UKSectionContainerDecorator>
      <MultiStepForm />
    </UKSectionContainerDecorator>
  ), { viewport: 'ipad'})
  .add('Default - iPhone X', () => (
    <UKSectionContainerDecorator>
      <MultiStepForm />
    </UKSectionContainerDecorator>
  ), { viewport: 'iphonex'});
