import IndexRoute from 'routes/index'
import { createStore } from 'redux'

describe('(Route) Home', () => {
  let _route

  let _store = createStore(state => state)
  _store.asyncReducers = {}

  beforeEach(() => {
    _route = IndexRoute(_store)
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })
})
