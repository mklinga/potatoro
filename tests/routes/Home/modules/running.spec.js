import {
  LAUNCH_POTATORO,
  STOP_POTATORO,
  launch,
  stop,
  default as runningReducer
} from 'routes/Home/modules/running'

describe('(Redux Module) Running', () => {
  it('Should export a constants', () => {
    expect(LAUNCH_POTATORO).to.equal('LAUNCH_POTATORO')
    expect(STOP_POTATORO).to.equal('STOP_POTATORO')
  })

  describe('(Reducer) runningReducer', () => {
    it('Should be a function.', () => {
      expect(runningReducer).to.be.a('function')
    })

    it('Should initialize with false', () => {
      expect(runningReducer(undefined, {})).to.be.false
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = runningReducer(undefined, {})
      expect(state).to.be.false
      state = runningReducer(state, {type: '@@@@@@@'})
      expect(state).to.be.false
      state = runningReducer(state, launch())
      expect(state).to.be.true
      state = runningReducer(state, {type: '@@@@@@@'})
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

  describe('(Action Creator) stop', () => {
    it('Should be exported as a function.', () => {
      expect(stop).to.be.a('function')
    })

    it('Should return an action with type "STOP_POTATORO".', () => {
      expect(stop()).to.have.property('type', STOP_POTATORO)
    })

    it('Should assign no arguments into "payload"', () => {
      const _result = stop()
      expect(_result).not.to.have.property('payload')
    })
  })

  describe('(Action Handler) LAUNCH_POTATORO', () => {
    it('Should change the state to true', () => {
      let _state = runningReducer(undefined, {})
      expect(_state).to.be.false

      _state = runningReducer(_state, launch())
      expect(_state).to.be.true
    })
  })

  describe('(Action Handler) STOP_POTATORO', () => {
    it('Should change the state to false', () => {
      let _state = runningReducer(undefined, {})
      expect(_state).to.be.false

      _state = runningReducer(_state, launch())
      expect(_state).to.be.true

      _state = runningReducer(_state, stop())
      expect(_state).to.be.false
    })
  })
})
