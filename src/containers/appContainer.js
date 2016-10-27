// react
import React from 'react';
//components
import AppToolbar from '../components/appToolbar.js';
import AppFooter from '../components/appFooter';
// material-ui
import RefreshIndicator from 'material-ui/RefreshIndicator';
// cookie
import CookieBanner from 'react-cookie-banner';
// css
import '../css/App.css';

const AppContainer = React.createClass({
  getInitialState () {
    return {
      size: {
        width: 0,
        height: 0
      },
      appBar: {
        height: 100
      }
    }
  },
  setSize () {
    if (window.innerWidth>=1220) {
      return ({
        width: window.innerWidth,
        height: window.innerHeight
      })
    } else if (window.innerWidth>=992) {
      return ({
        width: window.innerWidth,
        height: window.innerHeight
      })
    } else if (window.innerWidth>=750) {
      return({
        width: window.innerWidth,
        height: window.innerHeight
      })
    } else {
      return({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  },
  componentDidMount () {
    window.addEventListener('scroll',this.handleScroll)
    let size = this.setSize()
    this.setState({
      size: {
        width: size.width,
        height: size.height
      },
    })
    window.onresize = () => {
      let size = this.setSize()
      this.setState({
        size: {
          width: size.width,
          height: size.height
        },
      })
    }
  },
  handleScroll (event) {
    let scrollTop = window.pageYOffset
    if (window.innerWidth<=750) {
      this.setState({
        appBar: {
          height: 64
        }
      })
    } else {
      if (scrollTop===0) {
        if (this.state.appBar.height===64) {
          this.setState({
            appBar: {
              height: 100
            }
          })
        }
      } else {
        if (this.state.appBar.height===100) {
          this.setState({
            appBar: {
              height: 64
            }
          })
        }
      }
    }
  },
  render() {
    if (this.state.size.width>0) {
      return (
        <div id='app' className="App">
          <CookieBanner
            message={'We use cookies on this site to enhance your user experience.'}
            onAccept={() => {}}
            disableStyle={true}
            dismissOnScroll={false}
            link={{msg: ' Click here for more information.', url: 'http://ec.europa.eu/cookies/index_en.htm'}}
            cookie='user-has-accepted-cookies'
            className='cookie-banner'
          />
          <AppToolbar width={this.state.size.width} access={false} appBar={this.state.appBar}/>
          <div style={{width: this.state.size.width, paddingTop:this.state.appBar.height}}>
            {React.cloneElement(this.props.children, {size: this.state.size, appBar: this.state.appBar})}
          </div>
          <AppFooter size={this.state.size} route={this.props.location}/>
        </div>
      )
    } else {
      const style = {
        container: {
          position: 'relative',
        },
        refresh: {
          display: 'inline-block',
          position: 'relative',
        },
      };
      return (
        <div className="App">
          <AppToolbar width={this.state.width} access={false}  appBar={this.state.appBar}/>
          <div style={style.container}>
            <RefreshIndicator
              size={40}
              left={10}
              top={0}
              status="loading"
              style={style.refresh}
            />
          </div>
          <AppFooter size={this.state.size} />
        </div>
      )
    }
  }
})

export default AppContainer
