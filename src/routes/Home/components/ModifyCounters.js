/* @flow */
import React from 'react'

type Props = {
  launch: Function
}

export const ModifyCounters = (props: Props) => (
  <div>
    <span>Modify counters</span>
    <button onClick={props.launch}>Launch!</button>
  </div>
)

ModifyCounters.propTypes = {
  launch: React.PropTypes.func.isRequired
}

export default ModifyCounters
