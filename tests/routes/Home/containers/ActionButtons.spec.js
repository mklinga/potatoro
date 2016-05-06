import React from 'react'
import { createStore, combineReducers } from 'redux'

import ActionButtons from 'routes/Home/containers/ActionButtons'
import { shallow } from 'enzyme'

describe('(Container) ActionButtons', () => {
  let _props, _wrapper

  let _store = createStore(state => state || { running: false })

  beforeEach(() => {
    _wrapper = shallow(<ActionButtons />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('launch')
    _wrapper.props().should.have.property('stop')
    _wrapper.props().should.have.property('running')
  })
})
