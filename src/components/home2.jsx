// react
import React from 'react'

// scroll
var scrollIntoView = require('scroll-into-view')

// import parallax effect
import { Parallax } from 'react-parallax'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

//css
import '../css/home.css'

// icons
import logo from '../logo.svg'
import pageTop from '../data/images/background/page-top.jpg'
import aboutUs from '../data/images/background/about-us.jpg'
import objective from '../data/images/background/objective.jpg'
import desired from '../data/images/background/desired.png'
import partners from '../data/images/background/partners.jpg'
import partecipate from '../data/images/background/background-partecipate.png'
import openSoftware from '../data/images/team/open-software.png'
import openHardware from '../data/images/team/open-hardware.png'
import openStandard from '../data/images/team/open-standard.png'
import openData from "../data/images/team/open-data.png"
import supsiLogo from "../data/images/partners/supsi_logo.png"
import uomLogo from "../data/images/partners/uom_logo.png"
import istLogo from "../data/images/partners/ist_logo.png"
import ugmLogo from "../data/images/partners/ugm_logo.png"
import iwmiLogo from "../data/images/partners/iwmi_logo.png"
import irriLogo from "../data/images/partners/irri_logo.png"
import gfdrrLogo from "../data/images/partners/gfdrr_logo.png"

const Home = React.createClass({
  handleClick (value, event) {
    scrollIntoView(document.getElementById(value));
  },
  handleClickHref (value, event) {
    console.log(value);
    switch (value) {
      case 'ogc':
        window.open('http://www.opengeospatial.org/standards', '_blank')
        break;
      case 'arduino':
        window.open('https://www.arduino.cc/', '_blank')
        break;
      case 'ckan':
        window.open('http://ckan.org/', '_blank')
        break;
      case 'istSOS':
        window.open('http://istsos.org/', '_blank')
        break;
      case 'uom':
        window.open('https://www.mrt.ac.lk/web/', '_blank')
        break;
      case 'supsi':
        window.open('http://www.supsi.ch/', '_blank')
        break;
      case 'ist':
        window.open('http://www.ist.edu.pk/', '_blank')
        break;
      case 'ugm':
        window.open('http://ugm.ac.id/en/', '_blank')
        break;
      case 'ugm':
        window.open('http://ugm.ac.id/en/', '_blank')
        break;
      case 'iwmi':
        window.open('http://www.iwmi.cgiar.org/', '_blank')
        break;
      case 'irri':
        window.open('http://www.irrigation.gov.lk/', '_blank')
        break;
      case 'wb':
        window.open('https://www.gfdrr.org/', '_blank')
        break;
      default:
        return
    }
  },
  componentDidMount () {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  },
  render () {
    let height = this.props.height-64
    return (
      <div>
      <Parallax strength={300} bgImage={pageTop} >
        <div id="page-top" className='section'>
          <section style={{minHeight:height+'px'}} >
            <Grid>
              <Row className='fade-in'>
                <Col xs={12}>
                  <h1>4ONSE</h1>
                  <h3>
                    <br />
                    <span>
                      4 times open & non-conventional technology for
                    </span>
                  </h3>
                  <h2>sensing the environment</h2>
                  <div>
                  <a className="twitter-timeline"  href="https://twitter.com/hashtag/foss4g" data-widget-id="786538663630901250">Tweet riguardo #foss4g</a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                <div className='next-section'>
                  <a onClick={this.handleClick.bind(this,'about')}><span></span></a>
                </div>
                </Col>
              </Row>
            </Grid>
          </section>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={aboutUs}>
        <div id='about' className='section'>
          <div style={{minHeight:height+'px'}}>
          <div className="container" style={{paddingBottom: '30px'}}>
				    <h3 className="section-name">
				      <span>Background</span>
				    </h3>
				    <h2 className="section-title">R4D</h2>
				    <p className="section-description">
					    The availability of complete, quality and dense monitoring hydro-meteorological data is essential to address a number of practical issues including, but not limited to, flood-water and urban drainage management, climate change impact assessment, early warning and risk management, now-casting and weather predictions. Thanks to the recent developments (Internet Of things, big data, Internet diffusion, etc.) non-conventional monitoring system based on low cost and open technologies may be a great opportunity either as a complement to standard and authoritative monitoring systems or as a vital data source in regions where traditional observation networks are in decline or missing.
			      </p>
            <div className="team-container">
              <Grid>
                <Row>
                  <Col md={3}>
                    <div className="team-member">
                      <figure onClick={this.handleClickHref.bind(this, 'istSOS')}>
                        <img src={openSoftware} style={{width: '100%'}} alt="Team Member" />
                        <figcaption>
                          <p className="member-name">istSOS</p>
                          <p className="designation">
                            Open SOftware
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="team-member">
                      <figure onClick={this.handleClickHref.bind(this, 'arduino')}>
                        <img src={openHardware} style={{width: '100%'}} alt="Team Member" />
                        <figcaption>
                          <p className="member-name">
                            Arduino
                          </p>
                          <p className="designation">
                            Open Hardware
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="team-member" >
                      <figure onClick={this.handleClickHref.bind(this, 'ogc')}>
                        <img src={openStandard} style={{width: '100%'}} alt="Team Member" />
                        <figcaption>
                          <p className="member-name">
                            OGC SOS
                          </p>
                          <p className="designation">
                            Open Standard
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="team-member">
                      <figure onClick={this.handleClickHref.bind(this, 'ckan')}>
                        <img src={openData} style={{width: '100%'}} alt="Team Member" />
                        <figcaption>
                          <p className="member-name">
                          </p>
                          ckan
                          <p className="designation">
                            Open Data
                          </p>

                        </figcaption>
                      </figure>
                    </div>
                  </Col>
                </Row>
              </Grid>
				      <div className="next-section">
					     <a className="go-to-objective" onClick={this.handleClick.bind(this,'objectvive')}><span></span></a>
				      </div>
            </div>
			     </div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={objective}>
        <div id='objectvive' className='section'>
          <div style={{minHeight:height+'px'}}>
            <div className="container" style={{paddingBottom: '30px'}}>
				      <h3 className="section-name">
					      <span>Objective of the project</span>
				      </h3>
				      <h2 className="section-title">
					      R4D
				      </h2>
				      <br/>
				      <p className="section-description" style={{fontSize: '24px', lineHeight: '40px'}}>
				        The objective of the project is to progress beyond the state of the art, providing detailed information on open challenges found in literature for these kind of open and non-conventional systems, specifically data quality, metadata accessibility and standardization. This will be achieved by integrating and further developing the available technologies to implement a fully open (data, standard, hardware and software) solution and to deploy an experimental monitoring system composed of about 30 stations which will be analysed in term of data quality; system durability; management costs; performances; sustainability. Moreover the suitability of this type of system will be evaluated in existing climatic-dependent management practices to understand its applicability, advantages and limitations.
				      </p>
              <div className="next-section">
					      <a onClick={this.handleClick.bind(this,'desired')}><span></span></a>
				      </div>
			      </div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={desired}>
        <div id='desired' className='section'>
          <div style={{minHeight:height+'px'}}>
          <div className="container" style={{paddingBottom: '30px'}}>
            <h3 className="section-name">
              <span>Changes and Impacts</span>
            </h3>
            <h2 className="section-title">R4D</h2>
            <br/>
            <p className="section-description" style={{fontSize: '24px', lineHeight: '36px'}}>
              The ultimate desired impact is to strengthen the capacity of data production, usage and management in developing countries. Filling the gap that lead to monitoring network failure in developing countries will empower these countries with the ability to set-up and maintain their own climatic monitoring network. This leads, among other benefits, to: shorter reaction time in case of impending hazards, better understanding of phenomena, wiser definition of management strategies and policies and capacity to evaluate policy implementation effects. With an eye at the above strategic objective, this project intend to contribute to advance in this direction by impacting the capability of developing countries in perform researches in the field of earth observation by means of better understanding of concepts on open technologies and data capabilities. It is also important that a common sense of joint responsibility of governments, international and regional organizations, private sector and civil society is grown in order to boost this process and that the opportunity of using data from dense monitoring system and open standards is well acknowledged as a support tool for the development of new policies and activities.
            </p>
            <div className="next-section">
              <a className="go-to-partners" onClick={this.handleClick.bind(this,'partners')}><span></span></a>
            </div>
          </div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={partners}>
        <div id='partners' className='section'>
          <div style={{minHeight:height+'px'}}>
            <div className="container" style={{paddingBottom: '30px'}}>
              <h3 className="section-name">
                <span>
                  Partners & collaborations
                </span>
              </h3>
              <h2 className="section-title">
                R4D
              </h2>
              <p className="section-description"></p>
              <br/>
              <div className="team-container">
                <Grid>
                <Row>
                  <Col md={3} sm={6} >
                    <div className="team-member">
                      <figure onClick={this.handleClickHref.bind(this, 'supsi')}>
                        <img src={supsiLogo} style={{width: '100%'}} alt="Team Member" />
                        <figcaption>
                          <p className="member-name" style={{fontSize: '12px'}}>
                            Institute of<br/>Earth Sciences
                          </p>
                          <p className="designation" style={{margin: '0px'}}>
                            Switzerland
                          </p>
                          <p style={{fontSize: '9px', margin: '0px'}}>
                            (Coordinator)
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </Col>
                  <Col md={3} sm={6}>
                    <div className="team-member">
                      <figure onClick={this.handleClickHref.bind(this, 'uom')}>
                        <img src={uomLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              University of<br/>Moratuwa
                            </p>
                            <p className="designation" style={{margin: '0px'}}>
                              Sri Lanka
                            </p>
                            <p style={{fontSize: '9px',margin: '0px'}}>
                              (Partner)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                    <Col md={3} sm={6}>
                      <div className="team-member">
                        <figure onClick={this.handleClickHref.bind(this, 'ist')}>
                          <img src={istLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              Institute of<br/>Space Technology
                            </p>
                            <p className="designation" style={{margin: '0px'}}>
                              Pakistan
                            </p>
                            <p style={{fontSize: '9px', margin: '0px'}}>
                              (Partner)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                    <Col md={3} sm={6}>
                      <div className="team-member">
                        <figure  onClick={this.handleClickHref.bind(this, 'ugm')}>
                          <img src={ugmLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              University of<br/>Gadjah Mada
                              </p>
                            <p className="designation" style={{margin: '0px'}}>
                              Indonesia
                            </p>
                            <p style={{fontSize: '9px', margin: '0px'}}>
                              (Partner)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} sm={6}>
                      <div className="team-member">
                        <figure onClick={this.handleClickHref.bind(this, 'iwmi')}>
                          <img src={iwmiLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              International water<br />Management Institute
                            </p>
                            <p className="designation" style={{margin: '0px'}}>
                              Sri Lanka
                            </p>
                            <p style={{fontSize: '9px', margin: '0px'}}>
                              (Collaboration)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                    <Col md={3} m={6}>
                      <div className="team-member">
                        <figure onClick={this.handleClickHref.bind(this, 'irri')}>
                          <img src={irriLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              Irrigation Department<br/>of ANURADHAPURAs
                            </p>
                            <p className="designation" style={{margin: '0px'}}>
                              Sri Lanka
                            </p>
                            <p style={{fontSize: '9px',margin: '0px'}}>
                              (Collaboration)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                    <Col md={3} sm={6}>
                      <div className="team-member">
                        <figure onClick={this.handleClickHref.bind(this, 'wb')}>
                          <img src={gfdrrLogo} style={{width: '100%'}} alt="Team Member" />
                          <figcaption>
                            <p className="member-name" style={{fontSize: '12px'}}>
                              World Bank<br />GFDRR
                            </p>
                            <p className="designation" style={{margin: '0px'}}>
                              USA
                            </p>
                            <p style={{fontSize: '9px',margin: '0px'}}>
                              (Collaboration)
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <div className="next-section">
          <a className="go-to-partners" onClick={this.handleClick.bind(this,'partecipate')}><span></span></a>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={partecipate}>
        <div id='partecipate' className='section' style={{background:'rgb(128, 128, 128)'}}>
          <div className="container" style={{paddingBottom: '30px'}}>
            <h3 className="section-name">
              <span>Participate</span>
            </h3>
            <h2 className="section-title">
              Become a testing partner
            </h2>
            <p className="section-description">
              Teams and people from all over the world desiring to participate in the testing experiment are more then welcome. Please contact us to be included in the experiment and in the 4ONSE community.
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
        <div className="next-section top">
          <a className="go-to-partners" onClick={this.handleClick.bind(this,'page-top')}><span></span></a>
        </div>
      </Parallax>
      </div>
    )
  }
})

export default Home
