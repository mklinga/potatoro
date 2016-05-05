/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './modules/home',
      './containers/PotatoroContainer'
    ], (require) => {
      const homeReducer = require('./modules/home').default
      const Potatoro = require('./containers/PotatoroContainer').default

      injectReducer(store, { key: 'running', reducer: homeReducer })

      next(null, Potatoro)
    })
  }
})
