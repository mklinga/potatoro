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

  describe('countTimeLeft', () => {
    it('Should show time left in seconds based on elapsed and duration', () => {
      for (let i = 0; i < 100; i++ ) {
        _initState.timers[0].duration = 1 + Math.floor(Math.random(179))
        _initState.elapsed = Math.floor(Math.random() * (_initState.timers[0].duration * 60))
        countTimeLeft(_initState).should.equal((_initState.timers[0].duration * 60) - _initState.elapsed)
      }
    })
  })

  describe('padLeft', () => {
    it('Should pad numbers smaller than ten with a zero', () => {
      for (let i = 0; i < 10; i++) {
        padLeft(i).should.equal('0' + i)
      }
    })

    it('Should not pad numbers bigger than ten with a zero', () => {
      for (let i = 10; i <= 60; i++) {
        padLeft(i).should.equal(i)
      }
    })
  })

  describe('formatTimer', () => {
    it('Should format seconds into minutes:seconds', () => {
      for (let min = 0; min < 120; min++) {
        for (let sec = 0; sec < 60; sec++) {
          const seconds = min*60 + sec;
          formatTimer(seconds).should.equal(min + ':' + padLeft(sec))
        }
      }
    })
  })
})
