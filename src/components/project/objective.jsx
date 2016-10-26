//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import aboutUs from '../../data/images/background/objective.jpg'

const Objective = React.createClass({
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+aboutUs+')',
      backgroundPosition:'bottom',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='objective'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Objective</h2>
          <Divider />
          <p className='paragraph'>
            The objective of the project is to progress beyond the state of the art, providing detailed information on open challenges found in literature for these kind of open and non-conventional systems, specifically data quality, metadata accessibility and standardization.
          </p>
          <p className='paragraph'>
            This will be achieved by integrating and further developing the available technologies to implement a fully open (data, standard, hardware and software) solution and to deploy an experimental monitoring system composed of about 30 stations which will be analysed in term of data quality; system durability; management costs; performances; sustainability. Moreover the suitability of this type of system will be evaluated in existing climatic-dependent management practices to understand its applicability, advantages and limitations.
          </p>
        </div>
      </div>
    )
  }
})

export default Objective
