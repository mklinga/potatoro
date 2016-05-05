/* @flow */
import { connect } from 'react-redux'

import Potatoro from '../components/Potatoro'

import { startTimer, stopTimer } from '../modules/timerActions'

const mapActionCreators = {
  startTimer,
  stopTimer
}

export default connect(undefined, mapActionCreators)(Potatoro)
