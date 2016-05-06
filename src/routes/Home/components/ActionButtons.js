/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './ActionButtons.scss'

type Props = {
  running: boolean,
  launch: () => Action,
  stop: () => Action
}

export const ActionButtons = (props: Props) => (
  <div>
    {props.running
      ? <button className={styles.launchButton} onClick={props.stop}>Pause</button>
      : <button className={styles.launchButton} onClick={props.launch}>Launch!</button>
    }
    <Link to='/edit'>Edit timers</Link>
  </div>
)

ActionButtons.propTypes = {
  running: React.PropTypes.bool.isRequired,
  launch: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired
}

export default ActionButtons
