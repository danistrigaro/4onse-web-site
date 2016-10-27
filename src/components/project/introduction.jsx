//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import pageTop from '../../data/images/background/page-top.jpg'

const Introduction = React.createClass({
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
      backgroundImage: 'url('+pageTop+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='introduction'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Introduction</h2>
          <Divider />
          <p className='paragraph'>
            This research is based on the commonly accepted assumption that the <strong>IoT</strong> has a great potential
            for societal, environmental as well as economic impact (<em>Coetzee et al., 2011, Evans, 2011</em>)
            enabling smarter decisions.
          </p>
          <p className='paragraph'>
            We also suppose that the lack of efficient, dense and modern monitoring
            systems in developing countries is due to the lack of sustainable solutions that meet local
            needs. This is supported by evidences found in literature, that highlight how existing networks
            have been mainly set up by foreign countries to monitor global, rather than local, phenomena
            and that identified as a key factor in system failures the inaccessibility to funds and local
            support (<em>Snow, 2013</em>). As a consequence we believe that <strong>a fully open solution</strong> would be able to fill
            the gap and permits developing countries to set up and maintain independently their own solution.
            A third hypothesis is given by the assumption that in the coming years the technological
            diffusion of mobile internet would reach most of the world, including not only the most populated
            areas but also the most remote regions.
          </p>
          <p className='paragraph'>
            We cannot exactly predict the evolution of this technology in developing countries, but there are
            marketing and economical studies that forecast a
            fast growing diffusion of wireless connectivity and smart devices there in the short future
            (<em>GSMA, 2014</em>).
          </p>
          <h3>References</h3>
          <ul className='paragraph'>
            <li><em>Coetzee, L., & Eksteen, J. (2011, May). The Internet of Things-promise for the future? An introduction. In IST-Africa Conference Proceedings, 2011 (pp. 1-9). IEEE.</em></li>
            <li><em>Evans, D. (2011). The internet of things: how the next evolution of the internet is changing everything. CISCO white paper, 1.</em></li>
            <li><em>Snow, J.T. (2013). Non-traditional Approaches to Weather Observations in Developing Countries. International Finance Corporation. Available online at: <a href='http://www.ifc.org/wps/wcm/connect/91c3778042bd94eeb2c6be0dc33b630b/NonTraditional+Approaches+to+Weather+Observations+in+Developing+Countries+-+John+Snow.pdf?MOD=AJPERES' target='_blank'>Link</a> [consulted on January 2015]</em></li>
            <li><em>GSMA (2014). The Mobile Economy 2014 GSMA 2014. Available online at:<a href='http://www.gsmamobileeconomy.com/GSMA_ME_Report_2014_R2_WEB.pdf' target='_blank'>Link</a> [consulted on January 2015]</em></li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Introduction
