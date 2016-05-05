import {
  MODIFY_TIMER,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  modifyTimer,
  startTimer,
  stopTimer,
  resetTimer,
  findTimerByType,
  default as timerActionsReducer
} from 'routes/Home/modules/timerActions'

describe('(Redux Module) Home/TimerActions', () => {
  it('Should export constants', () => {
    expect(MODIFY_TIMER).to.equal('MODIFY_TIMER')
    expect(START_TIMER).to.equal('START_TIMER')
    expect(STOP_TIMER).to.equal('STOP_TIMER')
    expect(RESET_TIMER).to.equal('RESET_TIMER')
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

    /*
     * We use the fact that startTimer can take tickLength as a parameter, normally it's 1000ms 
     */

    it('Should be exported as a function.', () => {
      expect(startTimer).to.be.a('function')
    })

    it('Should return an function', () => {
      startTimer().should.be.a('function')
    })

    it('Should dispatch on even intervals if state.running is true', function () {
      const _cb = sinon.spy()
      const _getState = () => ({ running: true, timers: { find: () => {}} })
      const _timer = startTimer(10)(_cb, _getState)

      _timer.should.be.a('number')
      _cb.callCount.should.equal(0)

      return new Promise((resolve, reject) => {
        return window.setTimeout(() => {
          _cb.callCount.should.be.at.least(1)
          _cb.should.have.been.calledWith({ type: MODIFY_TIMER, payload: 1 })
          resolve()
        }, 100)
      })
    })

    it('Should do nothing if state.running is false', function () {
      const _cb = sinon.spy()
      const _getState = () => ({ running: false, timers: { find: () => {}} })
      const _timer = startTimer(10)(_cb, _getState)

      _timer.should.be.a('number')
      _cb.callCount.should.equal(0)

      return new Promise((resolve, reject) => {
        return window.setTimeout(() => {
          _cb.callCount.should.equal(0)
          resolve()
        }, 100)
      })
    })

    describe('(Function) findTimerByType', () => {
      const _timers = [
        { type: 'WORK', duration: 30 },
        { type: 'SHORT_PAUSE', duration: 5 },
        { type: 'LONG_PAUSE', duration: 15 }
      ]

      const _state = {
        current: 0,
        sequence: [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
      }

      it('Should find correct timer with state.current', () => {
        _timers.find(findTimerByType(_state)).should.eql(_timers[0])
        
        _state.current = 1
        _timers.find(findTimerByType(_state)).should.eql(_timers[1])

        _state.current = 2
        _timers.find(findTimerByType(_state)).should.eql(_timers[0])

        _state.current = 3
        _timers.find(findTimerByType(_state)).should.eql(_timers[2])
      })

    })

    describe('(Clause) Timer has finished', function () {
      const _cb = sinon.spy()
      const _getState = () => ({
        running: true,
        elapsed: 1,
        current: 0,
        sequence: [ 'WORK', 'SHORT_PAUSE' ],
        timers: { find: () => {
          return { duration: 0 }
        }}
      })
      const _timer = startTimer(10)(_cb, _getState)

      it('Should dispatch stop()', () => {
        return new Promise((resolve, reject) => {
          return window.setTimeout(() => {
            _cb.should.have.been.calledWith({ type: 'STOP_POTATORO' })
            resolve()
          }, 100)
        })
      })

      it('Should dispatch resetTimer()', () => {
        return new Promise((resolve, reject) => {
          return window.setTimeout(() => {
            _cb.should.have.been.calledWith({ type: 'RESET_TIMER', payload: 0 })
            resolve()
          }, 1)
        })
      })

      it('Should dispatch current + 1()', () => {
        return new Promise((resolve, reject) => {
          return window.setTimeout(() => {
            _cb.should.have.been.calledWith({ type: 'SET_CURRENT_TIMER', payload: 1 })
            resolve()
          }, 1)
        })
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

  describe('(Action Creator) resetTimer', () => {
    it('Should be exported as a function.', () => {
      expect(resetTimer).to.be.a('function')
    })

    it('Should return an action with type "RESET_TIMER".', () => {
      expect(resetTimer()).to.have.property('type', RESET_TIMER)
    })

    it('Should assign 0 as payload by default', () => {
      const _result = resetTimer()
      _result.should.have.property('payload', 0)
    })

    it('Should assign value into payload', () => {
      const _result = resetTimer(12)
      _result.should.have.property('payload', 12)
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

  describe('(Action Handler) RESET_TIMER', () => {
    it('Should change the state by payload', () => {
      let _state = timerActionsReducer(undefined, {})
      expect(_state).to.equal(0)

      _state = timerActionsReducer(_state, resetTimer(12))
      expect(_state).to.equal(12)

      _state = timerActionsReducer(_state, resetTimer())
      expect(_state).to.equal(0)
    })
  })
})
