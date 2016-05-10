/* @flow */
import React from 'react'
import { Link } from 'react-router'
import type { Props } from 'types/home'

import styles from './ActionButtons.scss'

const _clickAction = action => {
  return e => {
    e.preventDefault()
    action()
  }
}

export const ActionButtons = (props: Props.ActionButtons) => (
  <div>
    {props.running
      ? <button className={styles.launchButton} onClick={props.stop}>Pause</button>
      : (
      <div>
        <button className={styles.launchButton} onClick={props.launch}>Launch!</button>
        <div>
          <a href='#' className={styles.actionLink} onClick={_clickAction(props.reset)}>Reset</a>
          <Link to='/edit'>Edit timers</Link>
          <a href='#' className={styles.actionLink} onClick={_clickAction(props.next)}>Next</a>
        </div>
      </div>
      )
    }
  </div>
)

ActionButtons.propTypes = {
  running: React.PropTypes.bool.isRequired,
  launch: React.PropTypes.func.isRequired,
  next: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired
}

export default ActionButtons
