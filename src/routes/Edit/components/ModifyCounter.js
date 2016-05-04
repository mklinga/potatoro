/* @flow */
import React from 'react'
import type { Timer, TimerType } from '../interfaces/timer'
import styles from './ModifyCounter.scss'
import constants from '../constants.js'

type Props = {
  timer: Timer,
  changeDuration: (type: TimerType, duration: string) => Action
}

export const labels = {
  WORK: 'Work period',
  SHORT_PAUSE: 'Short break',
  LONG_PAUSE: 'Long break'
}

export const _changeDuration = (type: TimerType, changeDuration: Props.changeDuration) => {
  return (e: { target: { value: string } }) => changeDuration(type, e.target.value)
}

export const ModifyCounter = (props: Props) => (
  <div key={props.timer.type} className={styles.timerRow}>
    <label>{labels[props.timer.type]}</label>
    <input
      className={props.timer.issues.length && styles.hasIssues}
      key={props.timer.type}
      min={constants.timer.min}
      max={constants.timer.max}
      onChange={_changeDuration(props.timer.type, props.changeDuration)}
      title={props.timer.issues.length ? props.timer.issues[0].msg : undefined}
      type='number'
      value={props.timer.issues.length ? props.timer.issues[0].value : props.timer.duration} />
    <span>{' '}minutes</span>
  </div>
)

ModifyCounter.propTypes = {
  timer: React.PropTypes.object.isRequired,
  changeDuration: React.PropTypes.func.isRequired
}

export default ModifyCounter
