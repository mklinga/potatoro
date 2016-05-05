/* @flow */
import React from 'react'
import LaunchOrEdit from './LaunchOrEdit'
import PotatoroContainer from '../containers/PotatoroContainer'

type Props = {
  running: boolean,
  launch: () => Action
}

export const HomeView = (props: Props) => (
  <div>
    <h2>Home View</h2>
    {props.running
      ? <PotatoroContainer />
      : <LaunchOrEdit launch={props.launch} />}
  </div>
)

HomeView.propTypes = {
  running: React.PropTypes.bool.isRequired,
  launch: React.PropTypes.func.isRequired
}

export default HomeView
