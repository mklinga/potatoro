/* @flow */
import React from 'react'

import ModifyCountersContainer from '../containers/ModifyCountersContainer'

type Props = {
  running: boolean
}

export const HomeView = (props: Props) => (
  <div>
    <h2>Home View</h2>
    {props.running
      ? <span>Running</span>
      : <ModifyCountersContainer />}
  </div>
)

HomeView.propTypes = {
  running: React.PropTypes.bool.isRequired
}

export default HomeView
