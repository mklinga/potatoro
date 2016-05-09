/* @flow */
import { connect } from 'react-redux'
import type { State } from 'types/timer'

import SequenceView from '../components/SequenceView'

const mapStateToProps = (state: State) => ({
  current: state.sequence[state.current]
})

export default connect(mapStateToProps)(SequenceView)
