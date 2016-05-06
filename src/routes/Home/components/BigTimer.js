/* @flow */
import React from 'react'

import styles from './BigTimer.scss'

type Props = {
  running: boolean,
  seconds: number
}

export const _padLeft = (sec: number) => sec < 10 ? `0${sec}` : sec

export const _formatTimer = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${_padLeft(seconds % 60)}`
}

export const BigTimer = (props: Props) => (
  <div className={styles.bigTimer}>
    <span className={props.running ? styles.running : styles.paused}>
    {_formatTimer(props.seconds)}
    </span>
  </div>
)

BigTimer.propTypes = {
  running: React.PropTypes.bool.isRequired,
  seconds: React.PropTypes.number.isRequired
}

export default BigTimer
