/* @flow */
import React from 'react'

import BigTimerContainer from '../containers/BigTimer'
import SequenceViewContainer from '../containers/SequenceView'
import ActionButtonsContainer from '../containers/ActionButtons'

export class Potatoro extends React.Component {
  timerId: number;

  componentDidMount () {
    this.timerId = this.props.startTimer()
  }

  componentWillUnmount () {
    this.props.stopTimer(this.timerId)
  }

  render () {
    return (
      <div>
        <BigTimerContainer />
        <SequenceViewContainer />
        <ActionButtonsContainer />
      </div>
    )
  }
}

Potatoro.propTypes = {
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
}

export default Potatoro
