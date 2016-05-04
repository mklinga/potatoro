/* @flow */

/*
 * state: {
 *   running: bool
 *   current: number (index of sequence)
 *   elapsed: number
 *   timers: [
 *     { type: WORK, duration: 30, issues: [] }
 *     { type: SHORT_PAUSE, duration: 5, issues: [] }
 *     { type: LONG_PAUSE, duration: 15, issues: [] }
 *   ]
 *   sequence: [ WORK, SHORT_PAUSE, WORK, SHORT_PAUSE, WORK, LONG_PAUSE ]
 * }
 */

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
