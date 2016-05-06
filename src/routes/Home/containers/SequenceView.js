/* @flow */
import { connect } from 'react-redux'

import SequenceView from '../components/SequenceView'

const mapStateToProps = (state) => ({
  sequence: state.sequence,
  current: state.current
})

export default connect(mapStateToProps)(SequenceView)
