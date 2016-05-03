/* @flow */
import React from 'react'
import type { Timer, TimerType } from '../interfaces/timer'
import styles from './ModifyCounter.scss'

type Props = {
  timer: Timer,
  changeDuration: (type: TimerType, duration: number) => Action
}

export const labels = {
  WORK: 'Work period',
  SHORT_PAUSE: 'Short break',
  LONG_PAUSE: 'Long break'
}

export const _changeDuration = (type: TimerType, changeDuration: Props.changeDuration) => {
  return e => changeDuration(type, e.target.value)
}

export const ModifyCounter = (props: Props) => (
  <div key={props.timer.type} className={styles.timerRow}>
    <label>{labels[props.timer.type]}</label>
    <input
      className={props.timer.issues.length && styles.hasIssues}
      key={props.timer.type}
      min={1}
      max={120}
      onChange={_changeDuration(props.timer.type, props.changeDuration)}
      title={props.timer.issues.length ? props.timer.issues[0].msg : undefined}
      type='number'
      value={props.timer.duration} />
    <span>{' '}minutes</span>
  </div>
)

ModifyCounter.propTypes = {
  timer: React.PropTypes.object.isRequired,
  changeDuration: React.PropTypes.func.isRequired
}

export default ModifyCounter
