/* @flow */
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
