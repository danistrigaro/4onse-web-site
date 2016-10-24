// react
import React from 'react';

// css
import '../css/App.css';

//components
import AppToolbar from '../components/appToolbar.js';
import AppFooter from '../components/appFooter';

// material-ui
import RefreshIndicator from 'material-ui/RefreshIndicator';

const AppContainer = React.createClass({
  getInitialState () {
    return {
      size: {
        width: 0,
        height: 0
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
  render() {
    if (this.state.size.width>0) {
      return (
        <div className="App">
          <AppToolbar width={this.state.size.width} access={false}/>
          <div style={{width: this.state.size.width}}>
            {React.cloneElement(this.props.children, {size: this.state.size})}
          </div>
          <AppFooter size={this.state.size} />
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
          <AppToolbar width={this.state.width} access={false}/>
          <div style={style.container} >
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
