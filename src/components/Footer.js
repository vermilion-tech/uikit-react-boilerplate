import React from 'react'

import BBBLogo from 'Images/ab-seal-horizontal-us.png';

export default class Footer extends React.Component {

  render() {
    return (
      <React.Fragment>
      <ul class='footer'>
        <li>© 2019 Monet Capital</li>
        <li>81 Willoughby St, Brooklyn, NY 11201</li>
        <li>info@monetcap.com</li>
        <li><img data-src={BBBLogo} className='uk-width-small' alt='' data-uk-img /></li>
      </ul>

      <p className='uk-text-small uk-padding-small'>
        Monet Capital is a free, no obligation financial service, connecting prospective borrowers with prospective lenders for business funding. Monet Capital is not a financial institution or a lender and cannot guarantee final approval of your funding. Qualifying for final approval for business funding depends on many factors including, but not limited to: income levels, credit and state of residence. Independent funding companies and lenders may verify your supplied information with a number of independent verification companies including but not limited to: CLVerify, Teletrack, or Accurint. All applications are subject to credit approval by the lender and the exact terms of your funding (including underwriting criteria for approval, interest and rates, repayment periods and monthly payment information) will be determined and presented to you by your lender. Each lender uses their own policies to determine their terms. You should carefully review each lender's terms and conditions to determine which type of funding works for your situation. Interest rates and terms are subject to change at any time without notice. Late or missed payments may be subject to increased fees and interest rates. There is no guarantee you will be approved for credit or that upon approval you will qualify for the advertised rates, fees, or terms shown. The offers on this site are from lenders who provide compensation to Monet Capital for provided leads. There is no cost to you to use this service. All reasonable efforts are made to provide and maintain accurate information. The rates set forth herein are examples for illustrative purposes only unless otherwise indicated and are not a guarantee or commitment to provide funds or extend credit. Funding is not available in all states at all requested amounts. If we are unable to connect your application with a lender, we will direct you to additional options to help address your financial needs. This service is not available to residents from West Virginia or the District of Columbia.
      </p>
      </React.Fragment>
    )
  }
}
