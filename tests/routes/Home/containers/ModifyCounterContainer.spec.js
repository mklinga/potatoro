import React from 'react'
import { createStore, combineReducers } from 'redux'

import ModifyCountersContainer from 'routes/Home/containers/ModifyCountersContainer'
import seqReducer from 'routes/Home/modules/sequence'
import timersReducer from 'routes/Home/modules/timers'
import { shallow } from 'enzyme'

describe('(Container) ModifyCounterContainer', () => {
  let _props, _wrapper

  const initialState = {
    timers: [
      { type: 'WORK', duration: 30, issues: [] },
      { type: 'SHORT_PAUSE', duration: 5, issues: [] },
      { type: 'LONG_PAUSE', duration: 15, issues: [] }
    ],
    sequence: [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
  }

  let _store = createStore(combineReducers({ timers: timersReducer, sequence: seqReducer }), initialState)

  beforeEach(() => {
    _wrapper = shallow(<ModifyCountersContainer {..._props} />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('timers')
    _wrapper.props().should.have.property('sequence')
    _wrapper.props().should.have.property('launch')
    _wrapper.props().should.have.property('changeDuration')
  })
})
