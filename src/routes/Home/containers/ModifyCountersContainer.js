/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import type { Timer, TimerType } from '../interfaces/timer'

import { launch } from '../modules/home'
import { changeDuration } from '../modules/timers'
import { changeSequence } from '../modules/sequence'

const mapStateToProps = (state: { timers: Array<Timer> }) => ({
  timers: state.timers
})

type ActionCreators = {
  changeDuration: (type: TimerType, duration: string) => Action,
  changeSequence: (amountOfshortBreaks: number) => Action,
  launch: () => Action
}

const mapActionCreators: ActionCreators = {
  changeDuration,
  changeSequence,
  launch
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
