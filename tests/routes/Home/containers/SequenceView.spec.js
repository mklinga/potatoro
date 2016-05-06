import React from 'react'
import { createStore, combineReducers } from 'redux'

import SequenceView from 'routes/Home/containers/SequenceView'
import { shallow } from 'enzyme'

describe('(Container) SequenceView', () => {
  let _props, _wrapper

  let _store = createStore(state => state || { current: 0, sequence: [ 'WORK', 'SHORT_PAUSE' ]})

  beforeEach(() => {
    _wrapper = shallow(<SequenceView />, { context: { store: _store } })
  })

  it('Should set needed properties', () => {
    _wrapper.props().should.have.property('current')
  })
})
