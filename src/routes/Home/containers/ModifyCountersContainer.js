/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import type { Timer } from '../interfaces/timer'

import { launch } from '../modules/home'
import { changeDuration } from '../modules/timers'

const mapStateToProps = (state: { timers: Array<Timer> }) => ({
  timers: state.timers
})

const mapActionCreators = {
  changeDuration,
  launch
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
