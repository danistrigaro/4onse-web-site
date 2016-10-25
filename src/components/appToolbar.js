// react
import React from 'react';
// react router
import {hashHistory} from 'react-router'
//loghi
import FouronseLogo from '../data/icons/4ONSE_logo.png'

// material ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionDescription from 'material-ui/svg-icons/action/description';
import SocialGroup from 'material-ui/svg-icons/social/group';
import NotificationSync from 'material-ui/svg-icons/notification/sync';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

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
    console.log(value);
    hashHistory.push(value)
    /*if (location.pathname==='/') {
      scrollIntoView(document.getElementById(value))
    } else {

    }*/
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
  getToolbar (width, access) {
    if (width<=750) {
      return (
        <AppBar
          title={<img role="presentation" src={FouronseLogo}  style={{height: '45px'}} />}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{color:'#333', position: 'fixed', width:width+'px', backgroundColor:'#FFF', zIndex: 2000}}
          className='appToolbar'
        >
          <Drawer
            docked={false}
            width={200}
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
                primaryText="The project"
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/project/introduction')}
                    key={1}
                    primaryText="Introduction"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/project/background')}
                    key={2}
                    primaryText="Background"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/project/objective')}
                    key={3}
                    primaryText="Objective"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/project/impacts')}
                    key={4}
                    primaryText="Impacts"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/partners')}
                    key={5}
                    primaryText="Partners"
                  />,
                  <ListItem
                    onClick={this.handleClick.bind(this, this.props.location, '/project/partecipate')}
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
          title={<img role="presentation" src={FouronseLogo} style={{height: '45px'}}/>}
          titleStyle={{color:'#333'}}
          style={{position: 'fixed', width:width+'px', backgroundColor:'#FFF', boxShadow: 'rgba(0, 0, 0, 0.66) 0px 1px 6px, rgba(0, 0, 0, 0.74) 0px 1px 4px', zIndex: 2000}}
          showMenuIconButton={false}
        >
          <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/')} label="HOME" />
          <IconMenu
            iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small} ><ActionHome /></IconButton>}
            open={this.state.openMenu}
            onRequestChange={this.handleOnRequestChange}
          >
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/project/introduction')} primaryText="Introduction" />
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/project/background')} primaryText="Background" />
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/project/objective')} primaryText="Objective" />
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/project/impacts')} primaryText="Impacts" />
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/partners')} primaryText="Partners" />
            <MenuItem onClick={this.handleClick.bind(this, this.props.location, '/project/partecipate')} primaryText="Partecipate" />
          </IconMenu>
          <FlatButton style={styleButton} onTouchTap={this.handleOpenMenu} label="The project" />
          <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/partners')} label="Partners" />
          <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/outreach')} label="Outreach" />
          <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/cooperation')} label="Cooperation" />
          <FlatButton style={styleButton} onClick={this.handleClick.bind(this, this.props.location, '/contact')} label="Contact" />
        </AppBar>
      )
    }
  },
  render () {
    return (
      <div>
        {this.getToolbar(this.props.width, this.props.access)}
      </div>
    )
  }
})

export default AppToolbar
