import React from 'react'

import HeroImage from 'Images/hero.jpg'
import BackgroundImage1 from 'Images/teal-bg-image-1.png'
import BackgroundImage2 from 'Images/teal-bg-image-2.png'

import Hero from './components/Hero'

import Navbar from './components/Navbar'
import IconCarousel from './components/IconCarousel'
import Flipcards from './components/Flipcards'
import IconGrid from './components/IconGrid'
import Accordion from './components/Accordion'

export default (props) => {
  return (
    <React.Fragment>
    
      <Navbar />

      <Hero />

      <div className='uk-section uk-section-large'>
        <div className='uk-container uk-text-center'>
          <h1 className='uk-margin-large uk-text-primary'>Some Industries We Serve</h1>

          <IconCarousel />

        </div>
      </div>

      <div className='uk-section uk-section-large uk-background-cover uk-background-norepeat' data-src={BackgroundImage2} data-uk-img>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center uk-light'>What People Say</h1>
          </div>

          <Flipcards />

        </div>
      </div>

      <div className='uk-section uk-section-large'>
        <div className='uk-container'>
          <div className='uk-margin-large'>
            <h1 className='uk-text-center uk-text-primary'>About Us</h1>
          </div>

          <Accordion />


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

          <IconGrid />
        </div>
      </div>
    </React.Fragment>

  )
}
