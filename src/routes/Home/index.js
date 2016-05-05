/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  getComponent (nextState: Object, next: Function) {
    require.ensure([
      './modules/home',
      './components/Potatoro'
    ], (require) => {
      const homeReducer = require('./modules/home').default
      const Potatoro = require('./components/Potatoro').default

      injectReducer(store, { key: 'running', reducer: homeReducer })

      next(null, Potatoro)
    })
  }
})
