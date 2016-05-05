/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './modules/current',
      './modules/running',
      './modules/timerActions',
      './containers/Potatoro'
    ], (require) => {
      const currentReducer = require('./modules/current').default
      const runningReducer = require('./modules/running').default
      const timerActionsReducer = require('./modules/timerActions').default
      const Potatoro = require('./containers/Potatoro').default

      injectReducer(store, { key: 'current', reducer: currentReducer })
      injectReducer(store, { key: 'elapsed', reducer: timerActionsReducer })
      injectReducer(store, { key: 'running', reducer: runningReducer })

      next(null, Potatoro)
    })
  }
})
