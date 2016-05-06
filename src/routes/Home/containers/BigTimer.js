/* @flow */
import { connect } from 'react-redux'

import BigTimer from '../components/BigTimer'

type State = {
  elapsed: number,
  current: number,
  sequence: Array<string>,
  timers: Array<{ type: string, duration: number, issues: Array<Object> }>
}

export const _countTimeLeft = (state: State) => {
  const currentTimer = state.timers.find(timer => timer.type === state.sequence[state.current])
  return (currentTimer.duration * 60) - state.elapsed
}

export const _padLeft = (sec: number) => sec < 10 ? `0${sec}` : sec

export const _formatTimer = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${_padLeft(seconds % 60)}`
}

const mapStateToProps = (state) => ({
  time: _formatTimer(_countTimeLeft(state)),
  disabled: !state.running
})

export default connect(mapStateToProps)(BigTimer)
