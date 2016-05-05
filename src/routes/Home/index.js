/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './modules/home',
      './modules/timerActions',
      './containers/Potatoro'
    ], (require) => {
      const homeReducer = require('./modules/home').default
      const timerActionsReducer = require('./modules/timerActions').default
      const Potatoro = require('./containers/Potatoro').default

      injectReducer(store, { key: 'running', reducer: homeReducer })
      injectReducer(store, { key: 'elapsed', reducer: timerActionsReducer })

      next(null, Potatoro)
    })
  }
})
