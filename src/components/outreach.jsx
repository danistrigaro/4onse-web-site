//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import aboutUs from '../data/images/background/about-us.jpg'

const Outreach = React.createClass({
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
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='page-top'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Outreach</h2>
          <Divider />
          <p className='paragraph'>

          </p>
        </div>
      </div>
    )
  }
})

export default Outreach
