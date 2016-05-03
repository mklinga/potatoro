/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import type { Timer, TimerType } from '../interfaces/timer'

import { launch } from '../modules/home'
import { changeDuration } from '../modules/timers'

const mapStateToProps = (state: { timers: Array<Timer> }) => ({
  timers: state.timers
})

type ActionCreators = {
  changeDuration: (type: TimerType, duration: number) => Action,
  launch: () => Action
}

const mapActionCreators: ActionCreators = {
  changeDuration,
  launch
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
