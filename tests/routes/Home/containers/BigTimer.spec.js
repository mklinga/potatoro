import React from 'react'
import { createStore, combineReducers } from 'redux'

import BigTimer, { countTimeLeft, formatTimer, padLeft } from 'routes/Home/containers/BigTimer'
import { shallow } from 'enzyme'

describe('(Container) BigTimer', () => {
  let _props, _wrapper

  const _initState = {
    current: 0,
    running: true,
    elapsed: 100,
    timers: [ { type: 'WORK', duration: 30 }, { type: 'SHORT_PAUSE', duration: 5 } ],
    sequence: [ 'WORK', 'SHORT_PAUSE' ]
  }

  let _store = createStore(state => state || _initState )

  beforeEach(() => {
    _wrapper = shallow(<BigTimer />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('time', '28:20')
    _wrapper.props().should.have.property('disabled', false)
  })
})
