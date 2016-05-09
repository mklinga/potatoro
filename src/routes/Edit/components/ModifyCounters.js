/* @flow */
import React from 'react'
import { Link } from 'react-router'

import type { Timer, TimerType } from 'types/timer'
import type { Props } from 'types/edit'

import styles from './ModifyCounters.scss'
import ModifyCounter from './ModifyCounter'
import ToggleButton from 'components/ToggleButton'

export const hasIssues: (timers: Array<Timer>) => boolean = (timers) => {
  return timers.reduce((issues, timer) => issues || timer.issues.length > 0, false)
}

export const getActiveFromSequence: (seq: Array<TimerType>) => number = (seq) => {
  return seq.length > 2 && seq[3] === 'SHORT_PAUSE' ? 2 : 1
}

export const ModifyCounters = (props: Props.ModifyCounters) => (
  <div className={styles.modifyCounters}>
    <h3>Durations</h3>
    <div className={styles.counters}>
      {props.timers.map(timer =>
        <ModifyCounter key={timer.type} timer={timer} changeDuration={props.changeDuration} />)}
    </div>
    <div className={styles.breakAmounts}>
      <label>Amount of short breaks</label>
      <ToggleButton active={getActiveFromSequence(props.sequence)} onChange={props.changeSequence}>
        <button value={1}>One</button>
        <button value={2}>Two</button>
      </ToggleButton>
    </div>
    <div className={styles.returnLink}>
      <Link role='button' to='/' disabled={hasIssues(props.timers)}>Save</Link>
    </div>
  </div>
)

ModifyCounters.propTypes = {
  changeDuration: React.PropTypes.func.isRequired,
  changeSequence: React.PropTypes.func.isRequired,
  timers: React.PropTypes.array.isRequired,
  sequence: React.PropTypes.array.isRequired
}

export default ModifyCounters
