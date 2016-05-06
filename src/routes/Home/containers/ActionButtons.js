/* @flow */
import { connect } from 'react-redux'

import ActionButtons from '../components/ActionButtons'

import { launch, stop } from '../modules/running'

const mapActionCreators = {
  launch,
  stop
}

const mapStateToProps = (state) => {
  return {
    running: state.running
  }
}

export default connect(mapStateToProps, mapActionCreators)(ActionButtons)
