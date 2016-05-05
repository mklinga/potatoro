import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import init from 'init.js'

import { reducers, injectReducer } from './reducers'

export default (initialState = {}, history) => {
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  // Use DevTools chrome extension in development
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  // Init all the fields from the init.js with dummy reducers that will get replaced when actually needed
  Object.keys(init).forEach(key => {
    injectReducer(store, { key, reducer: state => state || init[key] })
  })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default

      store.replaceReducer(reducers)
    })
  }

  return store
}
