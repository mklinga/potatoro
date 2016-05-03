import {
  CHANGE_DURATION,
  durationOrIssues,
  changeDuration,
  default as timersReducer
} from 'routes/Home/modules/timers'

const _setTimerDuration = (timers, type, duration) =>
  timers.map(timer => timer.type === type ? ({ ...timer, duration }) : timer)

describe('(Redux Module) Timers', () => {
  it('Should export a constant CHANGE_DURATION.', () => {
    expect(CHANGE_DURATION).to.equal('CHANGE_DURATION')
  })

  const _initialState = [
    { type: 'WORK', duration: 30, issues: [] },
    { type: 'SHORT_PAUSE', duration: 5, issues: [] },
    { type: 'LONG_PAUSE', duration: 15, issues: [] }
  ]

  describe('(Reducer) timersReducer', () => {
    it('Should be a function.', () => {
      expect(timersReducer).to.be.a('function')
    })

    it('Should initialize with three Timers', () => {
      expect(timersReducer(undefined, {})).to.eql(_initialState)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = timersReducer(undefined, {})
      expect(state).to.eql(_initialState)
      state = timersReducer(state, {type: '@@@@@@@'})
      expect(state).to.eql(_initialState)
      state = timersReducer(state, changeDuration('WORK', '15'))
      expect(state).to.eql(_setTimerDuration(_initialState, 'WORK', 15))
      state = timersReducer(state, {type: '@@@@@@@'})
      expect(state).to.eql(_setTimerDuration(_initialState, 'WORK', 15))
    })
  })

  describe('(Action Creator) changeDuration', () => {
    it('Should be exported as a function.', () => {
      expect(changeDuration).to.be.a('function')
    })

    it('Should return an action with type "CHANGE_DURATION".', () => {
      expect(changeDuration('WORK', '10')).to.have.property('type', CHANGE_DURATION)
    })

    it('Should assign arguments into "payload"', () => {
      const _result = changeDuration('SHORT_PAUSE', '8')
      expect(_result).to.have.property('payload')
      expect(_result).to.have.deep.property('payload.type', 'SHORT_PAUSE')
      expect(_result).to.have.deep.property('payload.duration', '8')
    })
  })

  describe('(Action Handler) CHANGE_DURATION', () => {
    it('Should change the state by the action payload\'s "duration" property if it\'s valid.', () => {
      let _state = timersReducer(undefined, {})
      expect(_state).to.eql(_initialState)

      _state = timersReducer(_state, changeDuration('WORK', '1'))
      let _expectedState = _setTimerDuration(_initialState, 'WORK', 1)

      expect(_state).to.eql(_expectedState)

      // Duplicate action should do nothing
      _state = timersReducer(_state, changeDuration('WORK', '1'))
      expect(_state).to.eql(_expectedState)

      _state = timersReducer(_state, changeDuration('SHORT_PAUSE', '12'))
      _expectedState = _setTimerDuration(_expectedState, 'SHORT_PAUSE', 12)

      expect(_state).to.eql(_expectedState)
    })

    it('Should change only the \'issues\' value if duration is not valid.', () => {
      let _state = timersReducer(undefined, {})
      expect(_state).to.eql(_initialState)

      // First valid state change
      _state = timersReducer(_state, changeDuration('WORK', '1'))
      let _expectedState = _setTimerDuration(_initialState, 'WORK', 1)
      expect(_state).to.eql(_expectedState)

      // This value should be invalid and thus set issues on the WORK timer
      _state = timersReducer(_state, changeDuration('WORK', '-1'))
      _expectedState[0].issues = [ { msg: 'Invalid duration', value: '-1' } ]
      expect(_state).to.eql(_expectedState)
    })
  })

  describe('(Validation) durationOrIssues', () => {
    const _test = num => durationOrIssues(num).issues.length === 0

    it('Should return no issues for valid numbers', () => {
      ;['1', '2', '44', '99', '120', '180'].forEach(num => {
        _test(num).should.be.true
      })
    })

    it('Should return with issues for invalid numbers', () => {
      ;['', '0', '-2', '10000', '181', '-3', '-1000', NaN, Infinity, 'string'].forEach(num => {
        _test(num).should.be.false
      })
    })

    it('Should include \'msg\' field in issues', () => {
      durationOrIssues(NaN).issues[0].should.have.property('msg')
    })

    it('Should include \'value\' field in issues with attempted invalid value', () => {
      durationOrIssues('-8').issues[0].should.have.property('value', '-8')
      durationOrIssues('1000000').issues[0].should.have.property('value', '1000000')
    })

    it('Should transform valid strings into numbers', () => {
      durationOrIssues('1').duration.should.eql(1)
      durationOrIssues('60').duration.should.eql(60)
      durationOrIssues('120').duration.should.eql(120)
    })
  })
})
