/* @flow */
import React from 'react'

type Props = {
  elapsed: number
}

export const BigTimer = (props: Props) => (
  <div>
    {props.elapsed}
  </div>
)

BigTimer.propTypes = {
  elapsed: React.PropTypes.number.isRequired
}

export default BigTimer
