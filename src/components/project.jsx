import React from 'react'
//import components
import Introduction from './project/introduction'
import Background from './project/background'
import Objective from './project/objective'
import Impacts from './project/impacts'
// scroll
var scrollIntoView = require('scroll-into-view')

const Project = React.createClass({
  componentDidMount () {
    scrollIntoView(document.getElementById(this.props.params.value));
  },
  render () {
    return (
      <div id='page-top'>
        <Introduction size={this.props.size} />
        <Background size={this.props.size} />
        <Objective size={this.props.size} />
        <Impacts size={this.props.size} />
      </div>
    )
  }
})

export default Project
