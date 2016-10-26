//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import desired from '../../data/images/background/desired.png'

const Impacts = React.createClass({
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
      backgroundImage: 'url('+desired+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='impacts'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Impacts</h2>
          <Divider />
          <ul className='paragraph'>
            <p>The ultimate desired impact is to strengthen the capacity of data production, usage and management in developing countries. Filling the gap that lead to monitoring network failure in developing countries will empower these countries with the ability: to set-up and maintain their own climatic monitoring network.<br/>This leads, among other benefits, to:</p>
            <li>shorter reaction time in case of impending hazards</li>
            <li>better understanding of phenomena</li>
            <li>wiser definition of management strategies and policies</li>
            <li>capacity to evaluate policy implementation effects.</li>
          </ul>
          <p className='paragraph'>
            With an eye at the above strategic objective, this project intend to contribute to advance in this direction by impacting the capability of developing countries in perform researches in the field of earth observation by means of better understanding of concepts on open technologies and data capabilities. It is also important that a common sense of joint responsibility of governments, international and regional organizations, private sector and civil society is grown in order to boost this process and that the opportunity of using data from dense monitoring system and open standards is well acknowledged as a support tool for the development of new policies and activities.
          </p>
        </div>
      </div>
    )
  }
})

export default Impacts
