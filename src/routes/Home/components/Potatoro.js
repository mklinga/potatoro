/* @flow */
import React from 'react'

import BigTimer from './BigTimer'

type Props = {
  elapsed: number
}

export const Potatoro = (props: Props) => (
  <div>
    <BigTimer elapsed={props.elapsed} />
  </div>
)

Potatoro.propTypes = {
  elapsed: React.PropTypes.number.isRequired
}

export default Potatoro
