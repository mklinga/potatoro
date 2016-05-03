/* @flow */
import React from 'react'

import type { Timer, TimerType } from '../interfaces/timer'

import styles from './ModifyCounters.scss'

import ModifyCounter from './ModifyCounter'

type Props = {
  changeDuration: (type: TimerType, duration: number) => Action,
  launch: () => Action,
  timers: Array<Timer>
}

export const hasIssues: (timers: Array<Timer>) => boolean = (timers) => {
  return timers.reduce((issues, timer) => issues || timer.issues.length > 0, false)
}

export const ModifyCounters = (props: Props) => (
  <div className={styles.modifyCounters}>
    <h3>Durations</h3>
    {props.timers.map(timer =>
      <ModifyCounter key={timer.type} timer={timer} changeDuration={props.changeDuration} />)}
    <button disabled={hasIssues(props.timers)} onClick={props.launch}>Launch!</button>
  </div>
)

ModifyCounters.propTypes = {
  changeDuration: React.PropTypes.func.isRequired,
  launch: React.PropTypes.func.isRequired,
  timers: React.PropTypes.array.isRequired
}

export default ModifyCounters
