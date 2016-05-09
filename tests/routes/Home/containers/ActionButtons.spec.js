import React from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ActionButtons from 'routes/Home/containers/ActionButtons'
import { shallow } from 'enzyme'

describe('(Container) ActionButtons', () => {
  let _props, _wrapper, _spy

  _spy = sinon.spy((state, action) => {
    return state || { running: false, sequence: [ 'WORK', 'SHORT_PAUSE' ], current: 0 }
  })

  let _store = createStore( _spy, applyMiddleware(thunk))
  
  beforeEach(() => {
    _wrapper = shallow(<ActionButtons />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('launch')
    _wrapper.props().should.have.property('reset')
    _wrapper.props().should.have.property('stop')
    _wrapper.props().should.have.property('next')
    _wrapper.props().should.have.property('running')
  })

  it('Should map reset to resetTimer with default argument (0)', () => {
    _wrapper.props().reset().should.eql({ type: 'RESET_TIMER', payload: 0 })
  })

  it('Should map next to setNextTimer', () => {
    _spy.reset()
    _spy.callCount.should.equal(0)

    _wrapper.props().next()
    _spy.lastCall.args[1].should.eql({ type: 'SET_CURRENT_TIMER', payload: 1 })
  })
})
