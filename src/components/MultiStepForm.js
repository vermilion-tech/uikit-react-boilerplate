import React from "react";
import UIkit from "uikit";

import {
  MoneySelect,
  SoonSelect,
  YearSelect,
  RevenueSelect,
  IndustrySelect
} from "Templates/MultiStepForm";

const LeftRightArrows = props => (
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
      moneySelect: "",
      soonSelect: "",
      yearSelect: "",
      revenueSelect: "",
      industrySelect: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let req = {
      moneySelect: this.props.moneySelect,
      soonSelect: this.state.soonSelect,
      yearSelect: this.state.yearSelect,
      revenueSelect: this.state.revenueSelect,
      industrySelect: this.state.industrySelect,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      businessName: this.state.businessName
    };

    console.log(req);
  }

  render() {
    return (
      <div id="msf-modal" data-uk-modal>
        <div className="uk-modal-dialog">
          <div className="multistepform uk-box-shadow-medium uk-flex">
            {/* tabs */}
            <div className=" uk-background-muted uk-width-1-4@s">
              <ul
                className="uk-tab uk-tab-left uk-margin-remove-bottom"
                data-uk-switcher="connect: .form-switcher; animation: uk-animation-fade; active: 1;"
              >
                <li>
                  <a href="#">{this.props.moneySelect}</a>
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
                        {this.props.moneySelect}
                      </h2>

                      <LeftRightArrows />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        How soon do you need {this.props.moneySelect}?
                      </h2>

                      {SoonSelect.map((item, index) => (
                        <div className="uk-margin">
                          <label key={index}>
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

                    <LeftRightArrows />
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        How many years have you been in business?
                      </h2>

                      {YearSelect.map((item, index) => (
                        <div className="uk-margin">
                          <label key={index}>
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

                    <LeftRightArrows />
                  </li>

                  <li>
                    <div>
                      <h2 className="monet-text-gold">
                        What is your monthly revenue?
                      </h2>

                      {RevenueSelect.map((item, index) => (
                        <div className="uk-margin">
                          <label key={index}>
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

                    <LeftRightArrows />
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
                          {IndustrySelect.map((item, index) => (
                            <option key={index}>{item}</option>
                          ))}
                        </select>
                        <br />
                      </div>
                    </div>

                    <LeftRightArrows />
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

                    <LeftRightArrows />
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

class MultiStepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moneySelect: MoneySelect[0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ moneySelect: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    UIkit.modal("#msf-modal").show();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="apply-now-trigger uk-flex uk-flex-middle uk-flex-right"
        >
          {/*
            A select specifying the amount of money the user wishes to apply for.
            This select is generated from an array called `MoneySelect`.
          */}
          <select
            onChange={this.handleChange}
            className="uk-select uk-width-expand"
          >
            {MoneySelect.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>

          {/*
            An input submit button which brings up the modal for the user to
            fill out the remainder of the `MultiStepForm`.
          */}
          <label>
            <input
              className="uk-button uk-button-primary uk-flex-1"
              value="Apply Now"
              type="submit"
            />
          </label>

          {/*
            Shown on `Apply Now` input submit button click. `moneySelect` state
            value is passed as a prop to the modal to seed the initial state of
            the `MultiStepFormModal` component.
          */}
        </form>
        <MultiStepFormModal moneySelect={this.state.moneySelect} />
      </div>
    );
  }
}

export default MultiStepForm;
