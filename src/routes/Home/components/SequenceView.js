/* @flow */
import React from 'react'
import type { Props } from 'types/home'
import { labels } from 'constants.js'

import styles from './SequenceView.scss'

export const SequenceView = (props: Props.SequenceView) => (
  <div className='current'>
    <span className={styles.current}>{labels[props.current]}</span>
  </div>
)

SequenceView.propTypes = {
  current: React.PropTypes.string.isRequired
}

export default SequenceView
