import React from 'react'
import { createStore, combineReducers } from 'redux'

import PotatoroContainer from 'routes/Home/containers/PotatoroContainer'
import homeReducer from 'routes/Home/modules/home'
import { shallow } from 'enzyme'

describe('(Container) Potatoro', () => {
  let _props, _wrapper
  let _store = createStore(combineReducers({ running: homeReducer }), { running: false })

  beforeEach(() => {
    _wrapper = shallow(<PotatoroContainer {..._props} />, { context: { store: _store } })
  })

  it('Should set \'running\' property from the store', () => {
    _wrapper.props().should.have.property('running', false)

    _store.dispatch({ type: 'LAUNCH_POTATORO' })
    _wrapper = shallow(<PotatoroContainer />, { context: { store: _store } })
    _wrapper.props().should.have.property('running', true)
  })
})
