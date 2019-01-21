import React from 'react'

import HeroImage from 'Images/hero.jpg'
import BackgroundImage1 from 'Images/teal-bg-image-1.png'
import BackgroundImage2 from 'Images/teal-bg-image-2.png'

import MultiStepForm from './components/MultiStepForm'
import Navbar from './components/Navbar'
import IconCarousel from './components/IconCarousel'
import Flipcards from './components/Flipcards'
import IconGrid from './components/IconGrid'
import Accordion from './components/Accordion'

export default (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-background-norepeat uk-background-cover' data-src={HeroImage} width='1920' height='1080' data-uk-img>
        <div className='uk-padding'>
          <div className='uk-light'>
            <h1>We know your time is important.</h1>
          </div>

          <div className='uk-child-width-1-2@s' data-uk-grid>

            <div className='uk-light'>
              <p className='uk-margin-small-right'>
                Monet Capital offers small business loans from $10,000 - $250,000, Apply now and we'll get you the money needed to fund your business within 24 hours!
              </p>
            </div>

            <div>
              <form className='uk-flex uk-flex-middle uk-flex-right'>
                <select className='uk-select uk-width-expand'>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <button data-uk-toggle='#apply-now-modal' className='uk-button uk-button-primary uk-flex-1' type='button'>Apply Now</button>
                <div id='apply-now-modal' data-uk-modal>
                  <div className='uk-modal-dialog'>
                    <MultiStepForm />
                  </div>
                </div>
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
