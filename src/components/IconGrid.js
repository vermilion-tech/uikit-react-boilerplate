import React from 'react'

import axios from 'axios'

const IconGridItem = (props) => (
  <div>
    <figure className='uk-thumbnail'>
      <img data-src={props.icon_image} alt={props.icon_image_alt_text} data-uk-img />
      <figcaption className='uk-thumbnail-caption'>{props.icon_caption}</figcaption>
    </figure>
  </div>
)
const ExampleIcon = {
  icon_caption: "Loading..."
}

export default class IconGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'icons': [ExampleIcon]
    }
  }

  componentDidMount() {
    axios.get('https://staging-backend.monetcap.com/api/home/sections/partners/icon_grid?_format=json')
      .then( (res) => {
        if (res.status === 200) {
          let items = res.data.map( (item,index) => ({
            icon_image: item.icon_image,
            icon_caption: item.icon_caption,
            icon_image_alt_text: item.icon_image_alt_text
          }))

          this.setState({ icons: items })
        }
      }, (err) => console.log(err))
  }

  render() {
    return (
      <React.Fragment>


          <div className='uk-child-width-1-2@s uk-child-width-1-4@m  uk-text-center uk-grid uk-margin-large'>

              {
                this.state.icons.map( (icon, index) => <IconGridItem {...icon} />)
              }

          </div>

      </React.Fragment>
    )
  }
}
