/* @flow */
import React from 'react'
import BigTimer from './BigTimer'
import SequenceView from './SequenceView'
import ActionButtons from './ActionButtons'

type Props = {
  running: boolean,
  launch: () => Action
}

export const Potatoro = (props: Props) => (
  <div>
    <h2>Home View</h2>
    <BigTimer />
    <SequenceView />
    <ActionButtons launch={props.launch} />
  </div>
)

Potatoro.propTypes = {
  running: React.PropTypes.bool.isRequired,
  launch: React.PropTypes.func.isRequired
}

export default Potatoro
