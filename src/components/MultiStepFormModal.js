import React from 'react';
import PropTypes from 'prop-types';
import UIkit from 'uikit';

import {
  SoonSelect,
  YearSelect,
  RevenueSelect,
  IndustrySelect,
} from 'Templates/MultiStepForm';

const LeftArrow = (
  <div className="uk-position-bottom-right uk-padding">
    <a
      href="#"
      data-uk-switcher-item="previous"
      data-uk-icon="icon: chevron-left; ratio: 1.5"
    />
  </div>
);

const RightArrow = (
  <div className="uk-position-bottom-right uk-padding">
    <a
      href="#"
      data-uk-switcher-item="next"
      data-uk-icon="icon: chevron-right; ratio: 1.5"
    />
  </div>
);

const LeftRightArrows = (
  <div className="uk-position-bottom-right uk-padding">
    <a
      href="#"
      data-uk-switcher-item="previous"
      data-uk-icon="icon: chevron-left; ratio: 1.5"
    />
    <a
      href="#"
      data-uk-switcher-item="next"
      data-uk-icon="icon: chevron-right; ratio: 1.5"
    />
  </div>
);

class MultiStepFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      soonSelect: '',
      yearSelect: '',
      revenueSelect: '',
      industrySelect: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.switcher = UIkit.switcher('.msf-tab', {
      connect: '.form-switcher',
      animation: 'uk-animation-fade',
      duration: '250',
      active: '1',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    // TODO: there has to be a better way to do this
    if (this.switcher.index() !== 5) {
      this.switcher.show('next');
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      soonSelect,
      yearSelect,
      revenueSelect,
      industrySelect,
      firstName,
      lastName,
      email,
      phone,
      businessName,
    } = this.state;

    const { moneySelect } = this.props;

    const req = {
      moneySelect,
      soonSelect,
      yearSelect,
      revenueSelect,
      industrySelect,
      firstName,
      lastName,
      email,
      phone,
      businessName,
    };

    // TODO: google sheets form post
    console.log(req);
  }

  render() {
    const { moneySelect } = this.props;

    return (
      <div id="msf-modal" data-uk-modal>
        <div className="uk-modal-dialog">
          <div className="multistepform uk-box-shadow-medium uk-flex">
            {/* tabs */}
            <div className=" uk-background-muted uk-width-1-4@s">
              <ul
                className="msf-tab uk-tab uk-tab-left uk-margin-remove-bottom"
              >
                <li>
                  <a href="#">{moneySelect}</a>
                </li>
                <li>
                  <a href="#">How Soon?</a>
                </li>
                <li>
                  <a href="#">Years in business</a>
                </li>
                <li>
                  <a href="#">Monthly revenue</a>
                </li>
                <li>
                  <a href="#">Industry</a>
                </li>
                <li>
                  <a href="#">Contact Information</a>
                </li>
              </ul>
            </div>

            {/* form content */}
            <div className="uk-background-default uk-padding uk-width-expand uk-position-relative">
              <form onSubmit={this.handleSubmit}>
                <ul className="form-switcher uk-switcher">
                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        {moneySelect}
                      </h2>

                      {RightArrow}
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        How soon do you need
                        {' '}
                        {moneySelect}
                        ?
                      </h2>

                      {SoonSelect.map(item => (
                        <div className="uk-margin">
                          <label>
                            <input
                              className="uk-radio"
                              type="radio"
                              name="soonSelect"
                              onChange={this.handleChange}
                              value={item}
                            />
                            {item}
                          </label>
                          <br />
                        </div>
                      ))}
                    </div>

                    {RightArrow}
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        How many years have you been in business?
                      </h2>

                      {YearSelect.map(item => (
                        <div className="uk-margin">
                          <label>
                            <input
                              className="uk-radio"
                              type="radio"
                              name="yearSelect"
                              onChange={this.handleChange}
                              value={item}
                            />
                            {item}
                          </label>
                          <br />
                        </div>
                      ))}
                    </div>

                    {LeftRightArrows}
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        What is your monthly revenue?
                      </h2>

                      {RevenueSelect.map(item => (
                        <div className="uk-margin">
                          <label>
                            <input
                              className="uk-radio"
                              type="radio"
                              name="revenueSelect"
                              onChange={this.handleChange}
                              value={item}
                            />
                            {item}
                          </label>
                          <br />
                        </div>
                      ))}
                    </div>

                    {LeftRightArrows}
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        What industry are you in?
                      </h2>

                      <div className="uk-margin">
                        <label>Choose Industry</label>
                        <select
                          name="industrySelect"
                          onChange={this.handleChange}
                          className="uk-select"
                        >
                          {IndustrySelect.map(item => (
                            <option>{item}</option>
                          ))}
                        </select>
                        <br />
                      </div>
                    </div>

                    {LeftRightArrows}
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        How can we contact you?
                      </h2>

                      <div className="uk-margin">
                        <input
                          className="uk-input"
                          type="text"
                          name="firstName"
                          onChange={this.handleChange}
                          placeholder="First Name"
                        />
                        <input
                          className="uk-input"
                          type="text"
                          name="lastName"
                          onChange={this.handleChange}
                          placeholder="Last Name"
                        />
                        <input
                          className="uk-input"
                          type="email"
                          name="email"
                          onChange={this.handleChange}
                          placeholder="Email Address"
                        />
                        <input
                          className="uk-input"
                          type="text"
                          name="phone"
                          onChange={this.handleChange}
                          placeholder="Phone Number"
                        />
                        <input
                          className="uk-input"
                          type="text"
                          name="businessName"
                          onChange={this.handleChange}
                          placeholder="Business Name"
                        />
                      </div>

                      <input
                        className="uk-button uk-button-default"
                        type="submit"
                        value="Get Cash Now"
                      />
                    </div>

                    {LeftArrow}
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MultiStepFormModal.propTypes = {
  moneySelect: PropTypes.string.isRequired,
};

export default MultiStepFormModal;
