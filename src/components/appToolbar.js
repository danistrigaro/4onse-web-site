// react
import React from 'react';
// react router
import {hashHistory} from 'react-router'
// scroll
var scrollIntoView = require('scroll-into-view')
//loghi
import FouronseLogo from '../data/icons/4ONSE_logo.png'
// bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
// material ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import SocialGroup from 'material-ui/svg-icons/social/group';
import NotificationSync from 'material-ui/svg-icons/notification/sync';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
//icons
import Linkedin from '../data/icons/linkedin-logo.svg'
import Twitter from '../data/icons/twitter.svg'
import GitHub from '../data/icons/github-logo.svg'
//css
import '../css/toolbar.css'

const AppToolbar = React.createClass({
  getInitialState () {
    return ({
      value: 1,
      user: null,
      password: null
    })
  },
  handleChange (event, index, value) {
    this.setState({
      value: value,
      open: false
    })
  },
  handleOpenMenu () {
    hashHistory.push(`/project/${'introduction'}`);
    this.setState({
      openMenu: true,
    })
  },
  handleOnRequestChange (value) {
    this.setState({
      openMenu: value,
    })
  },
  handleToggle () {
    this.setState({open: !this.state.open})
  },
  handleClick (location, value, event) {
    if (location==='link') {
      switch (value) {
        case 'twitter':
          window.open('https://twitter.com/4onseproject', '_blank');
          break;
        case 'github':
          window.open('https://github.com/4onse/', '_blank');
          break;
        case 'b2drop':
          window.open('https://b2drop.eudat.eu/login', '_blank');
          break;
        case 'google':
          window.open(value, '_blank');
          break;
        case 'linkedin':
          window.open('https://www.linkedin.com/in/ist-supsi-366a45130', '_blank');
          break;
        default:
          return true
      }
    } else {
      hashHistory.push(value)
    }
  },
  handleClickMenuItem (value, event) {
    if (value==='/partners') {
      hashHistory.push(value)
    } else {
      scrollIntoView(document.getElementById(value));
    }
  },
  handleSubmit () {
    this.props.accessRequest(this.state.user, this.state.password)
  },
  handleUserFieldChange (event) {
    this.setState({
      user: event.target.value
    })
  },
  handlePasswordFieldChange (event) {
    this.setState({
      password: event.target.value
    })
  },
  getToolbar (width, appBar, access) {
    if (width<=750) {
      return (
        <AppBar
          title={<img role="presentation" src={FouronseLogo}  style={{height: (appBar.height*0.6)+'px'}} />}
          titleStyle={{margin:'auto'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{color:'#333', position: 'fixed', width:width+'px', height: appBar.height+'px', backgroundColor:'#FFF', zIndex: 2000}}
          className='appToolbar'
        >
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <List>
              <ListItem
                primaryText="HOME"
                leftIcon={<ActionHome />}
                onClick={this.handleClick.bind(this, this.props.location, '/')}
              />
              <ListItem
                leftIcon={<ActionDescription />}
                primaryText="Project"
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, 'introduction')}
                    key={1}
                    primaryText="Introduction"
                  />,
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, 'background')}
                    key={2}
                    primaryText="Background"
                  />,
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, 'objective')}
                    key={3}
                    primaryText="Objective"
                  />,
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, 'impacts')}
                    key={4}
                    primaryText="Impacts"
                  />,
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, '/partners')}
                    key={5}
                    primaryText="Partners"
                  />,
                  <ListItem
                    onClick={this.handleClickMenuItem.bind(this, 'partecipate')}
                    key={6}
                    primaryText="Partecipate"
                  />
                ]}
              />
              <ListItem
                leftIcon={<SocialGroup />}
                primaryText="Partners"
                onClick={this.handleClick.bind(this, this.props.location, '/partners')}
              />
              <ListItem
                leftIcon={<ActionDescription />}
                primaryText="Outreach"
                onClick={this.handleClick.bind(this, this.props.location, '/outreach')}
              />
              <ListItem
                leftIcon={<NotificationSync />}
                primaryText="Cooperation"
                onClick={this.handleClick.bind(this, this.props.location, '/cooperation')}
              />
              <ListItem
                leftIcon={<CommunicationContactMail />}
                primaryText="Contact"
                onClick={this.handleClick.bind(this, this.props.location, '/contact')}
              />
              <ListItem
                leftIcon={<ActionBookmarkBorder />}
                primaryText="Links"
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'b2drop')}
                    key={1}
                    primaryText="B2DROP"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'google')}
                    key={2}
                    primaryText="Google group"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'twitter')}
                    key={3}
                    primaryText={<div><img src={Twitter} height='20px' /> Twitter</div>}
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'linkedin')}
                    key={4}
                    primaryText={<div><img src={Linkedin} height='20px' /> Linkedin</div>}
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'github')}
                    key={5}
                    primaryText={<div><img src={GitHub} height='20px' /> Github</div>}
                  />
                ]}
              />
            </List>
          </Drawer>
        </AppBar>
      )
    } else {
      let styleButton = {
        color: '#333',
        fontWeight: 'bold'
      }
      const styles = {
        smallIcon: {
          width: 1,
          height: 1,
          color: '#333',
          opacity: 0
        },
        small: {
          width: 1,
          height: 1,
          padding: 0,
        }
      };
      return (
        <AppBar
          title=''
          iconElementLeft={<img role="presentation" src={FouronseLogo} style={{height: (appBar.height*0.7)+'px'}}/>}
          titleStyle={{color:'#333'}}
          style={{position: 'fixed', width:width+'px',height: appBar.height+'px', backgroundColor:'#FFF', boxShadow: 'rgba(0, 0, 0, 0.66) 0px 1px 6px, rgba(0, 0, 0, 0.74) 0px 1px 4px', zIndex: 2000}}
          iconStyleLeft={{margin:'auto'}}
        >
          <Grid style={{margin:'auto'}}>
            <Row>
              <Col md={2} xs={2}>
                <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/')} label="HOME" />
              </Col>
              <Col md={2} xs={2}>
                <IconMenu
                  iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small} ><ActionHome /></IconButton>}
                  open={this.state.openMenu}
                  onRequestChange={this.handleOnRequestChange}
                >
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, 'introduction')} primaryText="Introduction" />
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, 'background')} primaryText="Background" />
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, 'impacts')} primaryText="Impacts" />
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, 'objective')} primaryText="Objective" />
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, '/partners')} primaryText="Partners" />
                  <MenuItem style={{fontSize: '14px'}} onClick={this.handleClickMenuItem.bind(this, 'partecipate')} primaryText="Partecipate" />
                </IconMenu>
                <FlatButton style={styleButton} onTouchTap={this.handleOpenMenu} label="Project" />
              </Col>
              <Col md={2} xs={2}>
                <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/partners')} label="Partners" />
              </Col>
              <Col md={2} xs={2}>
                <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/outreach')} label="Outreach" />
              </Col>
              <Col md={2} xs={2}>
                <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/cooperation')} label="Cooperation" />
              </Col>
              <Col md={2} xs={2}>
                <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/contact')} label="Contact" />
              </Col>
            </Row>
          </Grid>
        </AppBar>
      )
    }
  },
  render () {
    return (
      <div>
        {this.getToolbar(this.props.width, this.props.appBar, this.props.access)}
      </div>
    )
  }
})

export default AppToolbar
