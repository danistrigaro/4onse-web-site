// react
import React from 'react'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// import logo
import snfLogo from '../data/images/snf-logo.png'
import rd4Logo from '../data/images/r4d-logo.jpg'
import sdcLogo from '../data/images/sdc-logo.jpg'
import Linkedin from '../data/icons/linkedin-logo_white.svg'
import Twitter from '../data/icons/twitter-logo_white.svg'
import GitHub from '../data/icons/github-logo_white.svg'

// material-ui
//import { Toolbar } from 'material-ui/Toolbar';

const AppFooter = React.createClass({
  render () {
    let size = this.props.size
    let style = {
      maxHeight: '54px',
    }

    let styleSocial = {
      maxHeight: '40px',
      maxWidth: '40px',
      margin: '10px'
    }
    let styleGrid = {
      width:this.props.size.width+'px',
    }
    if (size.width<750) {
      styleGrid = {
        width:this.props.size.width+'px',
      }
      style.width = '100%'
    }
    return (
      <Grid style={styleGrid} >
        <Row style={{backgroundColor: '#333'}} >
          <Col md={12}>
            <a href='https://twitter.com/4onseproject' target='_blank'>
              <img style={styleSocial} src={Twitter} />
            </a>
            <a href='https://www.linkedin.com/in/ist-supsi-366a45130' target='_blank'>
              <img style={styleSocial} src={Linkedin} />
            </a>
            <a href='https://github.com/4onse/' target='_blank'>
              <img style={styleSocial} src={GitHub} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={4} style={{textAlign: 'center'}} >
            <a href="http://www.snf.ch" target='_BLANK'>
              <img
                className="img-responsive"
                role="presentation"
                src={snfLogo}
                style={style}
              />
            </a>
          </Col>
          <Col md={4} xs={4} style={{textAlign: 'center'}} >
            <a href="http://www.r4d.ch" target='_BLANK'>
            <img
              className="img-responsive"
              role="presentation"
              src={rd4Logo}
              style={style}
            />
            </a>
          </Col>
          <Col md={4} xs={4} style={{textAlign: 'center'}} >
            <a href="https://www.eda.admin.ch/sdc" target='_BLANK'>
              <img role="presentation" className="img-responsive" src={sdcLogo}
              style={{maxHeight: '54px',padding:'5px'}}
              />
            </a>
          </Col>
        </Row>
      </Grid>
    )
  }
})

export default AppFooter
