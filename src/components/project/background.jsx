//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import aboutUs from '../../data/images/background/about-us.jpg'

const Background = React.createClass({
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
      <div id='background'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Background</h2>
          <Divider />
          <p className='paragraph'>
            The availability of complete, quality and dense monitoring hydro-meteorological data is essential to address a number of practical issues including, but not limited to, flood-water and urban drainage management, climate change impact assessment, early warning and risk management, now-casting and weather predictions.
          </p>
          <p className='paragraph'>
            Thanks to the recent developments (Internet Of things, big data, Internet diffusion, etc.) <strong>non-conventional monitoring system</strong> based on low cost and open technologies may be a <strong>great opportunity</strong> either as a complement to standard and authoritative monitoring systems or as a vital data source in regions where traditional observation networks are in decline or missing.
          </p>
        </div>
      </div>
    )
  }
})

export default Background
