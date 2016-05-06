/* @flow */
import React from 'react'

import type { TimerType } from '../../Edit/interfaces/timer'

type Props = {
  current: number,
  sequence: Array<TimerType>
}

export const SequenceView = (props: Props) => (
  <div>
    <div>
      <h4>Current</h4>
      <span>{props.sequence[props.current]}</span>
    </div>

    <div>
      <h4>Next</h4>
      <span>{props.sequence[(props.current + 1) % props.sequence.length]}</span>
    </div>
  </div>
)

SequenceView.propTypes = {
  current: React.PropTypes.number.isRequired,
  sequence: React.PropTypes.array.isRequired
}

export default SequenceView
