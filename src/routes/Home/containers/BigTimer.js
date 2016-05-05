/* @flow */
import { connect } from 'react-redux'

import BigTimer from '../components/BigTimer'

const mapStateToProps = (state) => ({
  elapsed: state.elapsed
})

export default connect(mapStateToProps)(BigTimer)
