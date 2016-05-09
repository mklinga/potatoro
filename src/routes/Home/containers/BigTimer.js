/* @flow */
import { propEq, pipe } from 'klutils'
import { connect } from 'react-redux'
import type { State } from 'types/timer'

import BigTimer from '../components/BigTimer'

export const countTimeLeft = (state: State): number => {
  const currentTimer = state.timers.find(propEq('type', state.sequence[state.current]))
  return (currentTimer.duration * 60) - state.elapsed
}

export const padLeft = (sec: number): string => sec < 10 ? `0${sec}` : sec.toString()

export const formatTimer = (seconds: number): string => {
  return `${Math.floor(seconds / 60)}:${padLeft(seconds % 60)}`
}

const mapStateToProps = (state: State) => ({
  time: pipe(countTimeLeft, formatTimer)(state),
  disabled: !state.running
})

export default connect(mapStateToProps)(BigTimer)
