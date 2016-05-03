/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './containers/HomeViewContainer',
      './modules/home',
      './modules/timers'
    ], (require) => {
      const HomeView = require('./containers/HomeViewContainer').default
      const homeReducer = require('./modules/home').default
      const timerReducer = require('./modules/timers').default

      injectReducer(store, {
        key: 'running',
        reducer: homeReducer
      })

      injectReducer(store, {
        key: 'timers',
        reducer: timerReducer
      })

      next(null, HomeView)
    })
  }
})
