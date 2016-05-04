/* @flow */
import React from 'react'

import type { Timer, TimerType } from '../interfaces/timer'

import ModifyCounter from './ModifyCounter'
import ToggleButton from 'components/ToggleButton'

type Props = {
  changeDuration: (type: TimerType, duration: string) => Action,
  changeSequence: (amountOfshortBreaks: number) => Action,
  launch: () => Action,
  timers: Array<Timer>
}

export const hasIssues: (timers: Array<Timer>) => boolean = (timers) => {
  return timers.reduce((issues, timer) => issues || timer.issues.length > 0, false)
}

export const ModifyCounters = (props: Props) => (
  <div>
    <h3>Durations</h3>
    <div>
      {props.timers.map(timer =>
        <ModifyCounter key={timer.type} timer={timer} changeDuration={props.changeDuration} />)}
    </div>
    <div>
      <label>Amount of short breaks</label>
      <ToggleButton active={2} onChange={props.changeSequence}>
        <button value={1}>One</button>
        <button value={2}>Two</button>
      </ToggleButton>
    </div>
    <button disabled={hasIssues(props.timers)} onClick={props.launch}>Launch!</button>
  </div>
)

ModifyCounters.propTypes = {
  changeDuration: React.PropTypes.func.isRequired,
  changeSequence: React.PropTypes.func.isRequired,
  launch: React.PropTypes.func.isRequired,
  timers: React.PropTypes.array.isRequired
}

export default ModifyCounters
