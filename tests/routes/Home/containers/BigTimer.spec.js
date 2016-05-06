import React from 'react'
import { createStore, combineReducers } from 'redux'

import BigTimer, { _countTimeLeft } from 'routes/Home/containers/BigTimer'
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
    _wrapper.props().should.have.property('seconds')
    _wrapper.props().should.have.property('running')
  })

  describe('_countTimeLeft', () => {
    it('Should show time left in seconds based on elapsed and duration', () => {
      for (let i = 0; i < 100; i++ ) {
        _initState.timers[0].duration = 1 + Math.floor(Math.random(179))
        _initState.elapsed = Math.floor(Math.random() * (_initState.timers[0].duration * 60))
        _countTimeLeft(_initState).should.equal((_initState.timers[0].duration * 60) - _initState.elapsed)
      }
    })
  })
})
