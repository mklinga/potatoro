import React from 'react'
import { Link } from 'react-router'

import styles from './HomeView.scss'

export const LaunchOrEdit = (props: { launch: () => Action }) => (
  <div>
    <button className={styles.launchButton} onClick={props.launch}>Launch</button>
    <Link to='/edit'>Edit timers</Link>
  </div>
)

LaunchOrEdit.propTypes = {
  launch: React.PropTypes.func.isRequired
}

export default LaunchOrEdit
