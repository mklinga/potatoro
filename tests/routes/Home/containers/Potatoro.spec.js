import React from 'react'
import { createStore, combineReducers } from 'redux'

import Potatoro from 'routes/Home/containers/Potatoro'
import { shallow } from 'enzyme'

describe('(Container) Potatoro', () => {
  let _props, _wrapper

  let _store = createStore(state => state || { running: true }, { running: false })

  beforeEach(() => {
    _wrapper = shallow(<Potatoro />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('startTimer')
    _wrapper.props().should.have.property('stopTimer')
  })
})
