/* @flow */
import { connect } from 'react-redux'
import type { State } from 'types/timer'
import { getFormattedTime } from 'utils/timeFormat'

import BigTimer from '../components/BigTimer'

const mapStateToProps = (state: State) => ({
  time: getFormattedTime(state),
  disabled: !state.running
})

export default connect(mapStateToProps)(BigTimer)
