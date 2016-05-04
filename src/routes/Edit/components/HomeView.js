/* @flow */
import React from 'react'
import { Link } from 'react-router'

type Props = {
  running: boolean
}

export const HomeView = (props: Props) => (
  <div>
    <h2>Home View</h2>
    {props.running
      ? <span>Running</span>
      : <span>Not running</span>}
    <Link to='/edit'>Edit timers</Link>
  </div>
)

HomeView.propTypes = {
  running: React.PropTypes.bool.isRequired
}

export default HomeView
