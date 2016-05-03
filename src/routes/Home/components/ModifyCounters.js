/* @flow */
import React from 'react'

import type { Timer, TimerType } from '../interfaces/timer'

type Props = {
  changeDuration: (type: TimerType, duration: number) => Action,
  launch: () => Action,
  timers: Array<Timer>
}

const _changeDuration = (type: TimerType, changeDuration: Props.changeDuration) => {
  return e => changeDuration(type, e.target.value)
}

export const ModifyCounters = (props: Props) => (
  <div>
    {props.timers.map(timer => {
      return (
        <div key={timer.type}>
          {timer.type}
          <input
            key={timer.type}
            min={1}
            max={120}
            onChange={_changeDuration(timer.type, props.changeDuration)}
            type='number'
            value={timer.duration} />
        </div>
      )
    })}
    <button onClick={props.launch}>Launch!</button>
  </div>
)

ModifyCounters.propTypes = {
  changeDuration: React.PropTypes.func.isRequired,
  launch: React.PropTypes.func.isRequired,
  timers: React.PropTypes.array.isRequired
}

export default ModifyCounters
