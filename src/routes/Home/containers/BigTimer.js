/* @flow */
import { propEq, pipe } from 'klutils'
import { connect } from 'react-redux'

import BigTimer from '../components/BigTimer'

type State = {
  elapsed: number,
  current: number,
  sequence: Array<string>,
  timers: Array<{ type: string, duration: number, issues: Array<Object> }>
}

export const countTimeLeft = (state: State): number => {
  const currentTimer = state.timers.find(propEq('type', state.sequence[state.current]))
  return (currentTimer.duration * 60) - state.elapsed
}

export const padLeft = (sec: number) => sec < 10 ? `0${sec}` : sec

export const formatTimer = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${padLeft(seconds % 60)}`
}

const mapStateToProps = (state) => ({
  time: pipe(countTimeLeft, formatTimer)(state),
  disabled: !state.running
})

export default connect(mapStateToProps)(BigTimer)
