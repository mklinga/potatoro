import {
  SET_CURRENT_TIMER,
  setCurrent,
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
