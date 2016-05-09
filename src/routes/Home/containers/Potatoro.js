/* @flow */
import { connect } from 'react-redux'
import { Potatoro } from '../components/Potatoro'
import { startTimer, stopTimer } from '../modules/timerActions'
import type { ActionCreators } from 'types/home'

const mapActionCreators: ActionCreators.Potatoro = {
  startTimer,
  stopTimer
}

export default connect(undefined, mapActionCreators)(Potatoro)
