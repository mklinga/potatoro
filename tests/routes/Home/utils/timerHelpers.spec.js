import { getNextTimer } from 'routes/Home/utils/timerHelpers'

describe('(Utils) timerhelpers', () => {
  describe('getNextTimer', () => {
    let _array

    beforeEach(() => {
      _array = [ 'WORK', 'SHORT_PAUSE', 'LONG_PAUSE' ]
    })

    it('Should return next available index on the array', () => {
      getNextTimer(0, _array).should.equal(1)
      getNextTimer(1, _array).should.equal(2)
    })

    it('Should wrap around the array when on the last item', () => {
      getNextTimer(2, _array).should.equal(0)
    })
  })
})

