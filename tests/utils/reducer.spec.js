import makeReducer from 'utils/reducer'
describe('(Utils) Reducer', () => {
  describe('(function) makeReducer', () => {

    let _initialValue, _handlers, _reducer

    beforeEach(() => {
      _initialValue = 1,
      _handlers = {
        'reset': () => 1,
        'double': x => x * 2
      }
      _reducer = makeReducer(_initialValue, _handlers)
    })

    it('Should be a function', () => {
      makeReducer.should.be.a('function')
    })

    it('Should return a function', () => {
      makeReducer().should.be.a('function')
    })

    it('Should return the initialvalue when state is undefined', () => {
      _reducer(undefined, { type: '@@@@' }).should.equal(1)
    })

    it('Should send the state to actions', () => {
      _reducer(1, { type: 'double' }).should.equal(2)
      _reducer(20, { type: 'double' }).should.equal(40)
      _reducer(400, { type: 'reset' }).should.equal(1)
    })
  })
})

