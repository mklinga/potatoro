import EditRoute from 'routes/Edit'
import EditView from 'routes/Edit/containers/ModifyCountersContainer'
import { createStore } from 'redux'

describe('(Route) Edit', () => {
  let _route

  let _store = createStore(state => state)
  _store.asyncReducers = {}

  beforeEach(() => {
    _route = EditRoute(_store)
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  describe('getComponent (Edit)', () => {
    it('Should call next() with EditView', () => {
      let _cb = sinon.spy()
      _route.getComponent({}, _cb)

      _cb.should.have.been.calledWith(null, EditView)
    })
  })
})
