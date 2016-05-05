/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './ActionButtons.scss'

type Props = { launch: () => Action }

export const ActionButtons = (props: Props) => (
  <div>
    <button className={styles.launchButton} onClick={props.launch}>Launch!</button>
    <Link to='/edit'>Edit timers</Link>
  </div>
)

ActionButtons.propTypes = {
  launch: React.PropTypes.func.isRequired
}

export default ActionButtons
