import {
  SET_CURRENT_TIMER,
  setCurrent,
  setNextTimer,
  getNextTimerIndex,
  default as currentReducer
} from 'routes/Home/modules/current'

describe('(Redux Module) Current', () => {
  it('Should export a constant SET_CURRENT_TIMER.', () => {
    expect(SET_CURRENT_TIMER).to.equal('SET_CURRENT_TIMER')
  })

  describe('(Reducer) currentReducer', () => {
    it('Should be a function.', () => {
      expect(currentReducer).to.be.a('function')
    })

    it('Should initialize with 0', () => {
      expect(currentReducer(undefined, {})).to.equal(0)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = currentReducer(undefined, {})
      expect(state).to.equal(0)
      state = currentReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(0)
      state = currentReducer(state, setCurrent(1))
      expect(state).to.equal(1)
      state = currentReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(1)
    })
  })

  describe('(Action Creator) setCurrent', () => {
    it('Should be exported as a function.', () => {
      expect(setCurrent).to.be.a('function')
    })

    it('Should return an action with type "SET_CURRENT_TIMER".', () => {
      expect(setCurrent()).to.have.property('type', SET_CURRENT_TIMER)
    })

    it('Should assign arguments into "payload"', () => {
      expect(setCurrent(0)).to.have.property('payload', 0)
      expect(setCurrent(12)).to.have.property('payload', 12)
    })
  })

  describe('(Action Spawner) setNextTimer', () => {
    it('Should return a function', () => {
      setNextTimer().should.be.a('function')
    })

    it('Should dispatch the next available timer', () => {
      let _dispatch = sinon.spy()
      const _thunk = setNextTimer()
      _thunk(_dispatch, () => ({ current: 0, sequence: [ 'WORK', 'SHORT_PAUSE' ] }))

      _dispatch.should.have.been.calledWith({ type: 'SET_CURRENT_TIMER', payload: 1 })

      _thunk(_dispatch, () => ({ current: 1, sequence: [ 'WORK', 'SHORT_PAUSE' ] }))
      _dispatch.should.have.been.calledWith({ type: 'SET_CURRENT_TIMER', payload: 0 })
    })
  })

  describe('(Function) getNextTimerIndex', () => {
    let _seq, _state

    beforeEach(() => {
      _seq = [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
      _state = { current: 0, sequence: _seq }
    })

    it('Should return next index on the sequence', () => {
      getNextTimerIndex(_state).should.equal(1)

      _state = { current: 1, sequence: _seq }
      getNextTimerIndex(_state).should.equal(2)

      _state = { current: 2, sequence: _seq }
      getNextTimerIndex(_state).should.equal(3)
    })

    it('Should wrap on the edge of the sequence', () => {
      _state = { current: 3, sequence: _seq }
      getNextTimerIndex(_state).should.equal(0)
    })
  })

  describe('(Action Handler) SET_CURRENT_TIMER', () => {
    it('Should change the state according to payload', () => {
      let _state = currentReducer(undefined, {})
      expect(_state).to.equal(0)

      _state = currentReducer(_state, setCurrent(1))
      expect(_state).to.equal(1)

      _state = currentReducer(_state, setCurrent(12))
      expect(_state).to.equal(12)
    })
  })
})
