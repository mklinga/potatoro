import React from 'react'
import { createStore, combineReducers } from 'redux'

import ModifyCountersContainer from 'routes/Home/containers/ModifyCountersContainer'
// import homeReducer from 'routes/Home/modules/home'
import timersReducer from 'routes/Home/modules/timers'
import { shallow } from 'enzyme'

describe('(Container) ModifyCounterContainer', () => {
  let _props, _wrapper

  const initialState = [
    { type: 'WORK', duration: 30, issues: [] },
    { type: 'SHORT_PAUSE', duration: 5, issues: [] },
    { type: 'LONG_PAUSE', duration: 15, issues: [] }
  ]

  let _store = createStore(combineReducers({ timers: timersReducer }), { timers: initialState })

  beforeEach(() => {
    _wrapper = shallow(<ModifyCountersContainer {..._props} />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('timers')
    _wrapper.props().should.have.property('launch')
    _wrapper.props().should.have.property('changeDuration')
  })
})
