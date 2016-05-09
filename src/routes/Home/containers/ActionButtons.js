/* @flow */
import { connect } from 'react-redux'
import type { State } from 'types/timer'
import type { ActionCreators } from 'types/home'

import ActionButtons from '../components/ActionButtons'

import { launch, stop } from '../modules/running'

const mapActionCreators: ActionCreators.ActionButtons = {
  launch,
  stop
}

const mapStateToProps = (state: State) => {
  return {
    running: state.running
  }
}

export default connect(mapStateToProps, mapActionCreators)(ActionButtons)
