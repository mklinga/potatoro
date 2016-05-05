/* @flow */
import React from 'react'
import BigTimer from './BigTimer'
import SequenceView from './SequenceView'
import ActionButtons from './ActionButtons'

export class Potatoro extends React.Component {
  timerId: number;

  componentDidMount () {
    // this.timerId = window.setInterval(() => console.log(Date.now()), 2500)
  }

  componentWillUnmount () {
    // window.clearInterval(this.timerId)
  }

  render () {
    return (
      <div>
        <h2>Home View</h2>
        <BigTimer />
        <SequenceView />
        <ActionButtons />
      </div>
    )
  }
}

Potatoro.propTypes = {}

export default Potatoro
