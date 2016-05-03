import React from 'react'
import { createStore, combineReducers } from 'redux'

import HomeViewContainer from 'routes/Home/containers/HomeViewContainer'
import homeReducer from 'routes/Home/modules/home'
import { shallow } from 'enzyme'

describe('(Component) Home', () => {
  let _props, _wrapper
  let _store = createStore(combineReducers({ running: homeReducer }), { running: false })

  beforeEach(() => {
    _wrapper = shallow(<HomeViewContainer {..._props} />, { context: { store: _store } })
  })

  it('Should set \'running\' property from the store', () => {
    _wrapper.props().should.have.property('running', false)

    _store.dispatch({ type: 'LAUNCH_POTATORO' })
    _wrapper = shallow(<HomeViewContainer />, { context: { store: _store } })
    _wrapper.props().should.have.property('running', true)
  })
})
