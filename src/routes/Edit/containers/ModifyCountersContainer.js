/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import type { Timer, TimerType } from '../interfaces/timer'

import { changeDuration } from '../modules/timers'
import { changeSequence } from '../modules/sequence'

const mapStateToProps = (state: { timers: Array<Timer>, sequence: Array<TimerType> }) => ({
  sequence: state.sequence,
  timers: state.timers
})

type ActionCreators = {
  changeDuration: (type: TimerType, duration: string) => Action,
  changeSequence: (amountOfshortBreaks: number) => Action
}

const mapActionCreators: ActionCreators = {
  changeDuration,
  changeSequence
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
