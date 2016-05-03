/* @flow */
import { connect } from 'react-redux'

import ModifyCounters from '../components/ModifyCounters'

import { launch } from '../modules/home'

const mapStateToProps = (state) => ({
  a: 2
})

const mapActionCreators = {
  launch
}

export default connect(mapStateToProps, mapActionCreators)(ModifyCounters)
