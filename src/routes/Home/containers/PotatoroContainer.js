/* @flow */
import React from 'react'
import { connect } from 'react-redux'

import Potatoro from '../components/Potatoro'
import { launch } from '../modules/home'

const mapStateToProps = (state: Object) => ({
  elapsed: state.elapsed,
  running: state.running
})

const mapActionCreators = {
  launch
}

class PotatoroContainer extends React.Component {
  timerId: number;

  componentDidMount () {
    // this.timerId = window.setInterval(() => console.log(Date.now()), 2500)
  }

  componentWillUnmount () {
    // window.clearInterval(this.timerId)
  }
  render () {
    return <Potatoro {...this.props} />
  }
}

export default connect(mapStateToProps, mapActionCreators)(PotatoroContainer)
