import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import timerActionsReducer from 'routes/Home/modules/timerActions'
import { Potatoro } from 'routes/Home/components/Potatoro'
import { mount } from 'enzyme'

describe('(Component) Potatoro', () => {
  const _initialState = {
    elapsed: 0,
    current: 0,
    sequence: [ 'WORK', 'SHORT_PAUSE' ]
  }

  let _store = createStore(combineReducers({ elapsed: timerActionsReducer }), _initialState)
  let _wrapper, _spies

  beforeEach(() => {
    _spies = {
      startTimer: sinon.spy(),
      stopTimer: sinon.spy()
    }
    _wrapper = mount(
      <Provider store={_store}>
        <Potatoro startTimer={_spies.startTimer} stopTimer={_spies.stopTimer} />
      </Provider>)
  })

  it('Should render Potatoro', () => {
    _wrapper.find(Potatoro).should.exist
  })

  it('Should render with an <h2> that includes Home View text.', () => {
    _wrapper.find(Potatoro).find('h2').text().should.match(/Home View/)
  })

  describe('Timer', () => {
    beforeEach(() => {
      _spies = {
        startTimer: sinon.spy(),
        stopTimer: sinon.spy()
      }
      _wrapper = mount(
        <Provider store={_store}>
          <Potatoro startTimer={_spies.startTimer} stopTimer={_spies.stopTimer} />
        </Provider>)
    })

    it('Should start the timer at componentDidMount', () => {
      _spies.startTimer.should.have.been.called
    })

    it('Should stop the timer when unmounting', () => {
      _spies.stopTimer.should.not.have.been.called

      _wrapper.unmount()
      _spies.stopTimer.should.have.been.called
    })
  })
})
