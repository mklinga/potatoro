/* @flow */
import { connect } from 'react-redux'

import BigTimer from '../components/BigTimer'

type State = {
  elapsed: number,
  current: number,
  sequence: Array<string>,
  timers: Array<{ type: string}>
}

export const _countTimeLeft = (state: State) => {
  const currentTimer = state.timers.find(timer => timer.type === state.sequence[state.current])
  return (currentTimer.duration * 60) - state.elapsed
}

const mapStateToProps = (state) => ({
  seconds: _countTimeLeft(state),
  running: state.running
})

export default connect(mapStateToProps)(BigTimer)
