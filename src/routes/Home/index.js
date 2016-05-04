/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './modules/home',
      './containers/HomeViewContainer'
    ], (require) => {
      const homeReducer = require('./modules/home').default
      const HomeView = require('./containers/HomeViewContainer').default

      injectReducer(store, { key: 'running', reducer: homeReducer })

      next(null, HomeView)
    })
  }
})
