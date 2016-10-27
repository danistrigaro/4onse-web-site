//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import part from '../../data/images/background/partecipate.jpg'

const Cooperation = React.createClass({
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
      backgroundImage: 'url('+part+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='partecipate'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Cooperation</h2>
          <Divider />
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <iframe src="https://docs.google.com/forms/d/1l0Wey8-580JLLwOotQvfXOvwIdaCjFsRJPwe7VEWHRU/viewform?embedded=true"
					  width="100%"
					  height="1400"
					  frameBorder="0"
					  marginHeight="0"
					  marginWidth="0">
            Caricamento in corso...
				  </iframe>
        </div>
      </div>
    )
  }
})

export default Cooperation
