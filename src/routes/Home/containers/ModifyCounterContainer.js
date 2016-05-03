/* @flow */
import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => ({
  running: state.running
})

export default connect(mapStateToProps)(HomeView)
