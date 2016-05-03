/* @flow */
import { connect } from 'react-redux'
// import { fetchZen, saveCurrentZen } from '../modules/zen'

import HomeView from '../components/HomeView'

// import type { ZenObject } from '../interfaces/zen'

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
  running: state.running
})

export default connect(mapStateToProps, mapActionCreators)(HomeView)
