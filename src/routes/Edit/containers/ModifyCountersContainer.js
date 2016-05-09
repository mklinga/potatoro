/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import type { State } from 'types/timer'
import type { ActionCreators } from 'types/edit'

import { changeDuration } from '../modules/timers'
import { changeSequence } from '../modules/sequence'

const mapStateToProps = (state: State) => ({
  sequence: state.sequence,
  timers: state.timers
})

const mapActionCreators: ActionCreators.ModifyCountersContainer = {
  changeDuration,
  changeSequence
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
