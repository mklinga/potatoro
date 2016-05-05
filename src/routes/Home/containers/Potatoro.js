/* @flow */
import { connect } from 'react-redux'
import { Potatoro } from '../components/Potatoro'
import { startTimer, stopTimer } from '../modules/timerActions'

const mapActionCreators = {
  startTimer,
  stopTimer
}

const mapStateToProps = (state) => ({
  current: state.current,
  timers: state.timers
})

export default connect(mapStateToProps, mapActionCreators)(Potatoro)
