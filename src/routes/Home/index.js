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

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './containers/HomeViewContainer'
    ], (require) => {
      const HomeView = require('./containers/HomeViewContainer').default

      next(null, HomeView)
    })
  }
})
