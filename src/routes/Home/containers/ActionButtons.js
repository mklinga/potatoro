/* @flow */
import { connect } from 'react-redux'
import type { State } from 'types/timer'
import type { ActionCreators } from 'types/home'

import ActionButtons from '../components/ActionButtons'

import { launch, stop } from '../modules/running'
import { resetTimer } from '../modules/timerActions'
import { setNextTimer } from '../modules/current'

const mapActionCreators: ActionCreators.ActionButtons = {
  launch,
  reset: () => resetTimer(),
  next: () => setNextTimer(),
  stop
}

const mapStateToProps = (state: State) => {
  return {
    running: state.running
  }
}

export default connect(mapStateToProps, mapActionCreators)(ActionButtons)
