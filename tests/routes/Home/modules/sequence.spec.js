import {
  CHANGE_SEQUENCE,
  ALLOWED_SEQUENCES,
  changeSequence,
  default as seqReducer
} from 'routes/Home/modules/sequence'

describe('(Redux Module) Sequence', () => {
  it('Should export a constant CHANGE_SEQUENCE.', () => {
    expect(CHANGE_SEQUENCE).to.equal('CHANGE_SEQUENCE')
  })

  it('Should export a constant ALLOWED_SEQUENCES.', () => {
    expect(ALLOWED_SEQUENCES).to.exist
  })

  const _initialState = ALLOWED_SEQUENCES[2]

  describe('(Reducer) seqReducer', () => {
    it('Should be a function.', () => {
      expect(seqReducer).to.be.a('function')
    })

    it('Should initialize with a sequence', () => {
      expect(seqReducer(undefined, {})).to.eql(_initialState)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = seqReducer(undefined, {})
      expect(state).to.eql(_initialState)
      state = seqReducer(state, {type: '@@@@@@@'})
      expect(state).to.eql(_initialState)
      state = seqReducer(state, changeSequence(1))
      expect(state).to.eql(ALLOWED_SEQUENCES[1])
      state = seqReducer(state, {type: '@@@@@@@'})
      expect(state).to.eql(ALLOWED_SEQUENCES[1])
    })
  })

  describe('(Action Creator) changeSequence', () => {
    it('Should be exported as a function.', () => {
      expect(changeSequence).to.be.a('function')
    })

    it('Should return an action with type "CHANGE_SEQUENCE".', () => {
      expect(changeSequence(1)).to.have.property('type', CHANGE_SEQUENCE)
    })

    it('Should assign argument into "payload"', () => {
      const _result = changeSequence(1)
      expect(_result).to.have.property('payload')
      expect(_result).to.have.deep.property('payload.amountOfshortBreaks', 1)
    })
  })

  describe('(Action Handler) CHANGE_SEQUENCE', () => {
    it('Should change the state by the action payload if it\'s valid.', () => {
      let _state = seqReducer(undefined, {})
      expect(_state).to.eql(_initialState)

      _state = seqReducer(_state, changeSequence(1))
      expect(_state).to.eql(ALLOWED_SEQUENCES[1])

      // Duplicate action should do nothing
      _state = seqReducer(_state, changeSequence(1))
      expect(_state).to.eql(ALLOWED_SEQUENCES[1])

      // Invalid action should do nothing
      _state = seqReducer(_state, changeSequence('timothy'))
      expect(_state).to.eql(ALLOWED_SEQUENCES[1])
    })
  })
})
