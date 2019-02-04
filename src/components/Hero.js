import React from 'react';
import HeroImage from 'Images/hero.jpg';
import MultiStepForm from './MultiStepForm';

import axios from 'axios';

export default class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hero: {
        hero_heading: 'Loading...',
        hero_body: 'Loading...',
        hero_image: HeroImage,
        hero_footer_text: 'Loading...'
      }
    }
  }

  componentDidMount() {
    axios.get('https://staging-backend.monetcap.com/api/home?_format=json').then((res) => {
      let data = res.data[0]

      this.setState({
        hero: {
          hero_heading: data.hero_heading,
          hero_body: data.hero_body,
          hero_image: data.hero_image,
          hero_footer_text: data.hero_footer_text
        }
      })

    }, (err) => console.log(err));
  }

  render() {
    return (<React.Fragment>
      <div className='uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-background-norepeat uk-background-cover uk-background-blend-overlay background-test' data-src={this.state.hero.hero_image} width='1920' height='1080' data-uk-img="data-uk-img">
        <div className='uk-padding uk-width-1-1'>
          <div className='uk-light'>
            <h1>{this.state.hero.hero_heading}</h1>
          </div>

          <div className='uk-child-width-1-2@s' data-uk-grid="data-uk-grid">

            <div className='uk-light' dangerouslySetInnerHTML={{
                __html: this.state.hero.hero_body
              }}></div>

            <div>
              <form className='apply-now-trigger uk-flex uk-flex-middle uk-flex-right'>

                {/* TODO: Make this reusable compoent */}
                <select className='uk-select uk-width-expand'>
                  <option>$10,000 - $25,000</option>
                  <option>$26,000 - $50,000</option>
                  <option>$51,000 - $100,000</option>
                  <option>$51,000 - $100,000</option>
                  <option>$101,000 - $250,000</option>
                  <option>Over $250,000</option>
                </select>

                <button data-uk-toggle='#apply-now-modal' className='uk-button uk-button-primary uk-flex-1' type='button'>Apply Now</button>
                <div id='apply-now-modal' data-uk-modal="data-uk-modal">
                  <div className='uk-modal-dialog'>
                    <MultiStepForm/>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>

        <div className='uk-position-bottom uk-text-center uk-padding-small uk-background-primary uk-light'>
          {this.state.hero.hero_footer_text}
        </div>
      </div>
    </React.Fragment>)
  }
}
