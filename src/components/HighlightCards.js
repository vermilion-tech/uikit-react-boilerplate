import React from 'react'

import axios from 'axios'

const HighlightCard = (props) => (
  <div>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{props.highlight_heading}</h3>
      <p className="uk-margin-bottom uk-text-left">{props.highlight_body}</p>
    </div>
  </div>
)
const ExampleHighlightCard = {
  highlight_heading: 'Loading...',
  highlight_body: 'Loading...'
}

export default class HighlightCards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'highlight_cards': [ExampleHighlightCard]
    }
  }

  componentDidMount() {
    axios.get('https://staging-backend.monetcap.com/api/home/sections/partners/highlight_cards?_format=json')
      .then( (res) => {
        if (res.status === 200) {
          let items = res.data.map( (item,index) => ({
            highlight_heading: item.highlight_heading,
            highlight_body: item.highlight_body,
          }))

          this.setState({ highlight_cards: items })
        }
      }, (err) => console.log(err))
  }


    render() {
      return (
        <React.Fragment>

            <div className="uk-child-width-1-2@m uk-grid-match uk-grid" data-uk-grid>

                {
                  this.state.highlight_cards.map( (highlight_card, index) => <HighlightCard {...highlight_card} />)
                }

            </div>

        </React.Fragment>
      )
    }
  }
