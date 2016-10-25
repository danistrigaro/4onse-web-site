// react
import React from 'react'
// react-router
import {hashHistory} from 'react-router'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Carousel from 'react-bootstrap/lib/Carousel'

//material ui
import RaisedButton from 'material-ui/RaisedButton';

// icons
import pageTop from '../data/images/background/page-top.jpg'
import aboutUs from '../data/images/background/about-us.jpg'
import objective from '../data/images/background/objective.jpg'
import desired from '../data/images/background/desired.png'
import partners from '../data/images/background/partners.jpg'
import openSoftware from '../data/images/team/open-software.svg'
import openHardware from '../data/images/team/open-hardware.svg'
import openStandard from '../data/images/team/open-standard.svg'
import openData from "../data/images/team/open-data.svg"
import supsiLogo from "../data/images/partners/supsi_logo.png"
import uomLogo from "../data/images/partners/uom_logo.png"
import istLogo from "../data/images/partners/ist_logo.png"
import ugmLogo from "../data/images/partners/ugm_logo.png"
import iwmiLogo from "../data/images/partners/iwmi_logo.png"
import irriLogo from "../data/images/partners/irri_logo.png"
import gfdrrLogo from "../data/images/partners/gfdrr_logo.png"

const Home = React.createClass({
  handleButtonClick (value, event) {
    hashHistory.push(value)
  },
  render () {
    let styleCarouselButton = {
      margin: 12
    }
    let styleCarouselTitle = {}
    let styleCarouselCaption = {
      textAlign:'left',
      fontSize:'20px'
    }
    let heightCarousel
    let styleCarouselItemImg
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-20%)'}
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-20%)'}
    } else {
      heightCarousel = (this.props.size.width/1.77)
      styleCarouselCaption.fontSize = '12px'
      styleCarouselTitle.fontSize = '20px'
      styleCarouselItemImg = {width: '100%'}
    }
    let heightRow = (this.props.size.height - (heightCarousel+64+114))
    let styleCarouselItem = {height:heightCarousel}
    let styleImg = {
      padding: '15px',
    }
    return (
      <div id="page-top" style={{textAlign:'center'}}>
        <Carousel>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={pageTop}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>The 4ONSE project</h3>
              <p>4 times open & non-conventional technology for</p>
              <p style={{animation: 'heartbeat 1s infinite'}}>SENSING THE ENVIRONMENT</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, '/project/introduction')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={aboutUs}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>BACKGROUND</h3>
              <p>Non-conventional monitoring system based on low cost and open technologies may be a great opportunity</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, '/project/background')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={objective}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>OBJECTIVE OF THE PROJECT</h3>
              <p>Integrating and further developing the available technologies to implement a fully open (data, standard, hardware and software) solution</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, '/project/objective')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={desired}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>CHANGES AND IMPACTS</h3>
              <p>The ultimate desired impact is to strengthen the capacity of data production, usage and management in developing countries.</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, '/project/impacts')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={partners}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>PARTNERS & COLLABORATIONS</h3>
              <p></p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, '/partners')}/>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Grid style={{width:this.props.size.width+'px', paddingBottom:'10px', paddingTop:'0px'}}>
          <Row >
            <Col md={3} sm={3}>
              <div>
                <figure >
                  <img src={openSoftware} style={styleImg} alt="Team Member" />
                  <figcaption>
                    <p>
                      <strong>IstSOS</strong>
                    </p>
                    <p>
                      Open SOftware
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Col>
            <Col md={3} sm={3}>
              <div>
                <figure>
                  <img src={openHardware} style={styleImg} alt="Team Member" />
                  <figcaption>
                    <p>
                      <strong>Arduino</strong>
                    </p>
                    <p>
                      Open Hardware
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Col>
            <Col md={3} sm={3}>
              <div>
                <figure>
                  <img src={openStandard} style={styleImg} alt="Team Member" />
                  <figcaption>
                    <p>
                      <strong>OGC SOS</strong>
                    </p>
                    <p>
                      Open Standard
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Col>
            <Col md={3} sm={3}>
              <div>
                <figure>
                  <img src={openData} style={styleImg} alt="Team Member" />
                  <figcaption>
                    <p>
                      <strong>CKAN</strong>
                    </p>
                    <p>
                      Open Data
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

export default Home
