/* @flow */
import React from 'react'
import type { Props } from 'types/home'

import styles from './BigTimer.scss'

export const BigTimer = (props: Props.BigTimer) => (
  <div className={styles.bigTimer}>
    <span className={props.disabled ? styles.disabled : undefined}>
    {props.time}
    </span>
  </div>
)

BigTimer.propTypes = {
  disabled: React.PropTypes.bool.isRequired,
  time: React.PropTypes.string.isRequired
}

export default BigTimer
