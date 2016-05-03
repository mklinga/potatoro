/* @flow */
import React from 'react'

import type { Timer, TimerType } from '../interfaces/timer'

import styles from './ModifyCounters.scss'

type Props = {
  changeDuration: (type: TimerType, duration: number) => Action,
  launch: () => Action,
  timers: Array<Timer>
}

const _changeDuration = (type: TimerType, changeDuration: Props.changeDuration) => {
  return e => changeDuration(type, e.target.value)
}

const labels = {
  WORK: 'Work period',
  SHORT_PAUSE: 'Short break',
  LONG_PAUSE: 'Long break'
}

const hasIssues: (timers: Array<Timer>) => boolean = (timers) => {
  return !!timers.find(timer => timer.issues.length)
}

export const ModifyCounters = (props: Props) => (
  <div>
    <h3>Durations</h3>
    {props.timers.map(timer => {
      return (
        <div key={timer.type} className={styles.timerRow}>
          <label>{labels[timer.type]}</label>
          <input
            className={timer.issues.length && styles.hasIssues}
            key={timer.type}
            min={1}
            max={120}
            onChange={_changeDuration(timer.type, props.changeDuration)}
            type='number'
            value={timer.duration} />
          <span>{' '}minutes</span>
        </div>
      )
    })}
    <button disabled={hasIssues(props.timers)} onClick={props.launch}>Launch!</button>
  </div>
)

ModifyCounters.propTypes = {
  changeDuration: React.PropTypes.func.isRequired,
  launch: React.PropTypes.func.isRequired,
  timers: React.PropTypes.array.isRequired
}

export default ModifyCounters
