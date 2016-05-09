/* @flow */
import React from 'react'
import { Link } from 'react-router'
import type { Props } from 'types/home'

import styles from './ActionButtons.scss'

export const ActionButtons = (props: Props.ActionButtons) => (
  <div>
    {props.running
      ? <button className={styles.launchButton} onClick={props.stop}>Pause</button>
      : <button className={styles.launchButton} onClick={props.launch}>Launch!</button>
    }
    {!props.running && <Link to='/edit'>Edit timers</Link>}
  </div>
)

ActionButtons.propTypes = {
  running: React.PropTypes.bool.isRequired,
  launch: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired
}

export default ActionButtons
