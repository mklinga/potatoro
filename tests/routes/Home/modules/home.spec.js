import {
  LAUNCH_POTATORO,
  launch,
  default as homeReducer
} from 'routes/Home/modules/home'

describe('(Redux Module) Home', () => {
  it('Should export a constant LAUNCH_POTATORO.', () => {
    expect(LAUNCH_POTATORO).to.equal('LAUNCH_POTATORO')
  })

  describe('(Reducer) homeReducer', () => {
    it('Should be a function.', () => {
      expect(homeReducer).to.be.a('function')
    })

    it('Should initialize with false', () => {
      expect(homeReducer(undefined, {})).to.be.false
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = homeReducer(undefined, {})
      expect(state).to.be.false
      state = homeReducer(state, {type: '@@@@@@@'})
      expect(state).to.be.false
      state = homeReducer(state, launch())
      expect(state).to.be.true
      state = homeReducer(state, {type: '@@@@@@@'})
      expect(state).to.be.true
    })
  })

  describe('(Action Creator) launch', () => {
    it('Should be exported as a function.', () => {
      expect(launch).to.be.a('function')
    })

    it('Should return an action with type "LAUNCH_POTATORO".', () => {
      expect(launch()).to.have.property('type', LAUNCH_POTATORO)
    })

    it('Should assign no arguments into "payload"', () => {
      const _result = launch()
      expect(_result).not.to.have.property('payload')
    })
  })

  describe('(Action Handler) LAUNCH_POTATORO', () => {
    it('Should change the state to true', () => {
      let _state = homeReducer(undefined, {})
      expect(_state).to.be.false

      _state = homeReducer(_state, launch())
      expect(_state).to.be.true
    })
  })
})
