/* @flow */
import { connect } from 'react-redux'

import HomeView from '../components/HomeView'
import { launch } from '../modules/home'

const mapStateToProps = (state: Object) => ({
  running: state.running
})

const mapActionCreators = {
  launch
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
