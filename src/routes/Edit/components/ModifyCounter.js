/* @flow */
import React from 'react'
import type { Event } from 'types/event'
import type { TimerType } from 'types/timer'
import type { Props } from 'types/edit'
import styles from './ModifyCounter.scss'
import { LABELS, TIMER } from 'utils/constants.js'

export const _changeDuration = (type: TimerType, changeDuration: Props.changeDuration) => {
  return (e: Event) => changeDuration(type, e.target.value)
}

export const ModifyCounter = (props: Props.ModifyCounter) => (
  <div key={props.timer.type} className={styles.timerRow}>
    <label>{LABELS[props.timer.type]}</label>
    <input
      className={props.timer.issues.length && styles.hasIssues}
      key={props.timer.type}
      min={TIMER.min}
      max={TIMER.max}
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
