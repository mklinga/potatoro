/* @flow */
import { connect } from 'react-redux'

import ActionButtons from '../components/ActionButtons'

import { launch } from '../modules/running'

const mapActionCreators = {
  launch
}

export default connect(undefined, mapActionCreators)(ActionButtons)