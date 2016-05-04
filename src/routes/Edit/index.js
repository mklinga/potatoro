/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  path: '/edit',
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './containers/ModifyCountersContainer',
      './modules/timers',
      './modules/sequence'
    ], (require) => {
      const Edit = require('./containers/ModifyCountersContainer').default
      const timerReducer = require('./modules/timers').default
      const seqReducer = require('./modules/sequence').default

      injectReducer(store, { key: 'timers', reducer: timerReducer })
      injectReducer(store, { key: 'sequence', reducer: seqReducer })

      next(null, Edit)
    })
  }
})
