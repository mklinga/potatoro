import {
  MODIFY_TIMER,
  START_TIMER,
  STOP_TIMER,
  modifyTimer,
  startTimer,
  stopTimer,
  default as timerActionsReducer
} from 'routes/Home/modules/timerActions'

describe('(Redux Module) Home/TimerActions', () => {
  it('Should export constants', () => {
    expect(MODIFY_TIMER).to.equal('MODIFY_TIMER')
    expect(START_TIMER).to.equal('START_TIMER')
    expect(STOP_TIMER).to.equal('STOP_TIMER')
  })

  describe('(Reducer) timerActionsReducer', () => {
    it('Should be a function.', () => {
      expect(timerActionsReducer).to.be.a('function')
    })

    it('Should initialize with 0', () => {
      expect(timerActionsReducer(undefined, {})).to.equal(0)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = timerActionsReducer(undefined, {})
      expect(state).to.equal(0)
      state = timerActionsReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(0)
      state = timerActionsReducer(state, modifyTimer())
      expect(state).to.equal(1)
      state = timerActionsReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(1)
    })
  })

  describe('(Action Creator) startTimer', () => {
    it('Should be exported as a function.', () => {
      expect(startTimer).to.be.a('function')
    })

    it('Should return an function', () => {
      startTimer().should.be.a('function')
    })

    it('Should dispatch on even intervals if state.running is true', function () {
      const _cb = sinon.spy()
      const _state = () => ({ running: true })
      const _timer = startTimer()(_cb, _state)

      _timer.should.be.a('number')
      _cb.callCount.should.equal(0)

      return new Promise((resolve, reject) => {
        return window.setTimeout(() => {
          _cb.callCount.should.equal(1)
          _cb.should.have.been.calledWith({ type: MODIFY_TIMER, payload: 1 })
          resolve()
        }, 1100)
      })
    })
    it('Should do nothing if state.running is false', function () {
      const _cb = sinon.spy()
      const _state = () => ({ running: false })
      const _timer = startTimer()(_cb, _state)

      _timer.should.be.a('number')
      _cb.callCount.should.equal(0)

      return new Promise((resolve, reject) => {
        return window.setTimeout(() => {
          _cb.callCount.should.equal(0)
          resolve()
        }, 1100)
      })
    })
  })

  describe('(function) stopTimer', () => {
    it('Should be exported as a function.', () => {
      expect(stopTimer).to.be.a('function')
    })

    it('Should return a thunk', () => {
      expect(stopTimer(null)).to.be.a('function')
    })

    it('Should clear given timeout', () => {
      const _cb = sinon.spy()
      const _timer = window.setInterval(_cb, 50)

      stopTimer(_timer)()

      return new Promise((resolve) => {
        return window.setTimeout(() => {
          _cb.should.not.have.been.called
          resolve()
        }, 60)
      })
    })
  })

  describe('(Action Creator) modifyTimer', () => {
    it('Should be exported as a function.', () => {
      expect(modifyTimer).to.be.a('function')
    })

    it('Should return an action with type "MODIFY_TIMER".', () => {
      expect(modifyTimer()).to.have.property('type', MODIFY_TIMER)
    })

    it('Should assign value "1" into payload', () => {
      const _result = modifyTimer()
      _result.should.have.property('payload', 1)
    })
  })

  describe('(Action Creator) modifyTimer', () => {
    it('Should be exported as a function.', () => {
      expect(modifyTimer).to.be.a('function')
    })

    it('Should return an action with type "MODIFY_TIMER".', () => {
      expect(modifyTimer()).to.have.property('type', MODIFY_TIMER)
    })

    it('Should assign value "1" into payload', () => {
      const _result = modifyTimer()
      _result.should.have.property('payload', 1)
    })
  })

  describe('(Action Handler) MODIFY_TIMER', () => {
    it('Should change the state by one', () => {
      let _state = timerActionsReducer(undefined, {})
      expect(_state).to.equal(0)

      _state = timerActionsReducer(_state, modifyTimer())
      expect(_state).to.equal(1)

      _state = timerActionsReducer(_state, modifyTimer())
      _state = timerActionsReducer(_state, modifyTimer())
      expect(_state).to.equal(3)
    })
  })
})
