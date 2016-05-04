// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

import Edit from './Edit'

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

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store),
    childRoutes: [
      Edit(store)
    ]
  }

  return routes
}

export default createRoutes
