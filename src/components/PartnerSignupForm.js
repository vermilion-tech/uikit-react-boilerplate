import React from 'react';

export default class PartnerSignupForm extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="uk-background-primary uk-padding-large uk-text-center">
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <span className="uk-text-uppercase uk-text-large uk-light uk-margin-bottom">Make more with monet</span>
          <form className="uk-grid-small uk-text-small uk-margin-top" data-uk-grid>
            <div className="uk-width-1-4@s">
                <input className="uk-input" type="text" placeholder="First name" />
            </div>
            <div className="uk-width-1-4@s">
                <input className="uk-input" type="text" placeholder="Last name" />
            </div>
            <div className="uk-width-1-2@s">
                <input className="uk-input" type="text" placeholder="Phone number" />
            </div>
            <div className="uk-width-1-2@s">
                <input className="uk-input" type="text" placeholder="E-mail address" />
            </div>
            <div className="uk-width-1-2@s">
                <input className="uk-input" type="text" placeholder="Business name" />
            </div>
            <div className="uk-width-1-1@s">
                <textarea className="uk-textarea" rows="4" placeholder="Message"></textarea>
                <button class="uk-button uk-button-alternate uk-text-center uk-align-center uk-width-1-2">Submit</button>
            </div>

          </form>
        </div>
      </React.Fragment>
    )
  }
}
