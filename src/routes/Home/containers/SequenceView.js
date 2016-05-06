/* @flow */
import { connect } from 'react-redux'

import SequenceView from '../components/SequenceView'

const mapStateToProps = (state) => ({
  current: state.sequence[state.current]
})

export default connect(mapStateToProps)(SequenceView)
