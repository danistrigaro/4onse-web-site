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
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
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
import LinkIcon from 'material-ui/svg-icons/content/link';
import NotificationSync from 'material-ui/svg-icons/notification/sync';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
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
    //hashHistory.push(`/project/${'main'}`);
    this.setState({
      openMenu: true,
    })
  },
  handleOpenMenuTeam () {
    this.setState({
      openMenuTeam: true,
    })
  },
  handleOpenMenuOutreach () {
    this.setState({
      openMenuOutreach: true,
    })
  },
  handleOnRequestChange (value) {
    this.setState({
      openMenu: value,
    })
  },
  handleOnRequestChangeTeam (value) {
    this.setState({
      openMenuTeam: value,
    })
  },
  handleOnRequestChangeOutreach (value) {
    this.setState({
      openMenuOutreach: value,
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
      hashHistory.push(`/project/${value}`);
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
                    onClick={this.handleClick.bind(this, this.props.location, '/governance')}
                    key={5}
                    primaryText="Governance"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/workingpackages')}
                    key={6}
                    primaryText="Working packages"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/casestudy')}
                    key={7}
                    primaryText="Case study"
                  />
                ]}
              />
              <ListItem
                leftIcon={<CommunicationContactMail />}
                primaryText="Team"
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/partners')}
                    key={1}
                    primaryText="Partners"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/people')}
                    key={2}
                    primaryText="People"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/advisoryboard')}
                    key={3}
                    primaryText="Advisory board"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/stakeholders')}
                    key={4}
                    primaryText="Stakeholders"
                  />
                ]}
              />
              <ListItem
                leftIcon={<CommunicationContactMail />}
                primaryText="Outreach"
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/presentations')}
                    key={1}
                    primaryText="Presentations"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/videos')}
                    key={2}
                    primaryText="Videos"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/materials')}
                    key={3}
                    primaryText="Materials"
                  />
                ]}
              />
              <ListItem
                leftIcon={<SocialGroup />}
                primaryText="Results"
                onClick={this.handleClick.bind(this, this.props.location, '/results')}
              />
              <ListItem
                leftIcon={<NotificationSync />}
                primaryText="Cooperation"
                onClick={this.handleClick.bind(this, this.props.location, '/cooperation')}
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
                    primaryText={<div><img role="presentation" src={Twitter} height='20px' /> Twitter</div>}
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'linkedin')}
                    key={4}
                    primaryText={<div><img role="presentation" src={Linkedin} height='20px' /> Linkedin</div>}
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, 'link', 'github')}
                    key={5}
                    primaryText={<div><img role="presentation" src={GitHub} height='20px' /> Github</div>}
                  />
                ]}
              />
            </List>
          </Drawer>
        </AppBar>
      )
    } else {
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
        },
        textMenu: {
          fontSize: '14px',
          color: '#333',
        }
      };
      if (width<=950) {
        styles.textMenu.fontSize='14px'
      }
      return (
        <AppBar
          title=''
          iconElementLeft={<img role="presentation" src={FouronseLogo} style={{height: (appBar.height*0.7)+'px'}}/>}
          titleStyle={{color:'#333'}}
          style={{position: 'fixed', width:width+'px',height: appBar.height+'px', backgroundColor:'#FFF', boxShadow: 'rgba(0, 0, 0, 0.66) 0px 1px 6px, rgba(0, 0, 0, 0.74) 0px 1px 4px', zIndex: 2000}}
          iconStyleLeft={{margin:'auto'}}
        >
          <div style={{display:'table', height:'100%'}}>
            <div style={{display:'table-cell', verticalAlign:'middle'}}>
              <FlatButton labelStyle={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/')} label="HOME" />
              <IconMenu
                iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small} ><ActionHome /></IconButton>}
                open={this.state.openMenu}
                onRequestChange={this.handleOnRequestChange}
              >
                <MenuItem style={styles.textMenu} onClick={this.handleClickMenuItem.bind(this, 'introduction')} primaryText="Introduction" />
                <MenuItem style={styles.textMenu} onClick={this.handleClickMenuItem.bind(this, 'background')} primaryText="Background" />
                <MenuItem style={styles.textMenu} onClick={this.handleClickMenuItem.bind(this, 'impacts')} primaryText="Impacts" />
                <MenuItem style={styles.textMenu} onClick={this.handleClickMenuItem.bind(this, 'objective')} primaryText="Objective" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/governance')} primaryText="Governance" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/workingpackages')} primaryText="Working packages" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/casestudy')} primaryText="Case study" />
              </IconMenu>
              <FlatButton labelStyle={styles.textMenu} onTouchTap={this.handleOpenMenu} label="Project" />
              <IconMenu
                iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small} ><ActionHome /></IconButton>}
                open={this.state.openMenuTeam}
                onRequestChange={this.handleOnRequestChangeTeam}
              >
                <MenuItem style={styles.textMenu} onClick={this.handleClickMenuItem.bind(this, '/partners')} primaryText="Partners" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/people')} primaryText="People" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/advisoryboard')} primaryText="Advisory board" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/stakeholders')} primaryText="Stakeholders" />
              </IconMenu>
              <FlatButton labelStyle={styles.textMenu} onTouchTap={this.handleOpenMenuTeam} label="Team" />
              <IconMenu
                iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small} ><ActionHome /></IconButton>}
                open={this.state.openMenuOutreach}
                onRequestChange={this.handleOnRequestChangeOutreach}
              >
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/presentations')} primaryText="Presentations" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/videos')} primaryText="Videos" />
                <MenuItem style={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/materials')} primaryText="Materials" />
              </IconMenu>
              <FlatButton labelStyle={styles.textMenu} onTouchTap={this.handleOpenMenuOutreach} label="Outreach" />
              <FlatButton labelStyle={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/results')} label="Results" />
              <FlatButton labelStyle={styles.textMenu} onClick={this.handleClick.bind(this, this.props.location, '/cooperation')} label="Cooperation" />
              <Button onTouchTap={this.handleClick.bind(this, this.props.location, '/links')} style={{backgroundImage:'none',border:'0'}}><Glyphicon glyph="link" /></Button>
            </div>
          </div>
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
