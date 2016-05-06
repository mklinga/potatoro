/* @flow */
import React from 'react'

import styles from './SequenceView.scss'

type Props = {
  current: string
}

export const SequenceView = (props: Props) => (
  <div className='current'>
    <span className={styles.current}>{props.current}</span>
  </div>
)

SequenceView.propTypes = {
  current: React.PropTypes.string.isRequired
}

export default SequenceView
