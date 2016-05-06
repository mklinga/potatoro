/* @flow */
import React from 'react'

import styles from './BigTimer.scss'

type Props = {
  disabled: boolean,
  time: string
}

export const BigTimer = (props: Props) => (
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
