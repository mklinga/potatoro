import HomeRoute from 'routes/Home'
import Potatoro from 'routes/Home/containers/PotatoroContainer'
import { createStore } from 'redux'

describe('(Route) Home', () => {
  let _route

  let _store = createStore(state => state)
  _store.asyncReducers = {}

  beforeEach(() => {
    _route = HomeRoute(_store)
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  describe('getComponent (Home)', () => {
    it('Should call next() with PotatoroContainer', () => {
      let _cb = sinon.spy()
      _route.getComponent({}, _cb)

      _cb.should.have.been.calledWith(null, Potatoro)
    })
  })
})
