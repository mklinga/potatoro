/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './containers/HomeViewContainer',
      './modules/home'
    ], (require) => {
      const HomeView = require('./containers/HomeViewContainer').default
      const homeReducer = require('./modules/home').default

      injectReducer(store, {
        key: 'running',
        reducer: homeReducer
      })

      next(null, HomeView)
    })
  }
})
