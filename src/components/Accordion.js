import React from 'react'

import axios from 'axios'

const AccordionItem = (props) => (
  <li>
    <a className='uk-accordion-title uk-text-primary uk-padding' href='#'>{props.accordion_heading}</a>
    <div className='uk-accordion-content uk-padding' dangerouslySetInnerHTML={{__html:
    props.accordion_body}}></div>
  </li>
)
const ExampleAccordionItem = {
  accordion_heading: 'Loading...'
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'accordion_items': [ExampleAccordionItem]
    }
  }

  componentDidMount() {
    axios.get('https://staging-backend.monetcap.com/api/home/sections/about/accordion?_format=json')
      .then( (res) => {
        if (res.status === 200) {
          let items = res.data.map( (item,index) => ({
            accordion_heading: item.accordion_item_heading,
            accordion_body: item.accordion_item_body,
          }))

          this.setState({ accordion_items: items })
        }
      }, (err) => console.log(err))
  }

  render() {
    return (
      <React.Fragment>

          <ul data-uk-accordion>

              {
                this.state.accordion_items.map( (accordion_item, index) => <AccordionItem {...accordion_item} />)
              }

          </ul>

      </React.Fragment>
    )
  }
}
