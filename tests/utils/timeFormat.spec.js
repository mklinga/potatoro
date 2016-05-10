import {
  countTimeLeft,
  getFormattedTime,
  padLeft,
  formatTimer
} from 'utils/timeFormat'

describe('(Utils) TimeFormat', () => {

  let _initState

  beforeEach(() => {
    _initState = {
      current: 0,
      running: true,
      elapsed: 100,
      timers: [ { type: 'WORK', duration: 30 }, { type: 'SHORT_PAUSE', duration: 5 } ],
      sequence: [ 'WORK', 'SHORT_PAUSE' ]
    }
  })

  describe('countTimeLeft', () => {

    it('Should show time left in seconds based on elapsed and duration', () => {
      for (let i = 0; i < 100; i++ ) {
        _initState.timers[0].duration = 1 + Math.floor(Math.random(179))
        _initState.elapsed = Math.floor(Math.random() * (_initState.timers[0].duration * 60))
        countTimeLeft(_initState).should.equal((_initState.timers[0].duration * 60) - _initState.elapsed)
      }
    })
  })

  describe('padLeft', () => {
    it('Should pad numbers smaller than ten with a zero', () => {
      for (let i = 0; i < 10; i++) {
        padLeft(i).should.equal('0' + i)
      }
    })

    it('Should not pad numbers bigger than ten with a zero', () => {
      for (let i = 10; i <= 60; i++) {
        padLeft(i).should.equal(i.toString())
      }
    })
  })

  describe('formatTimer', () => {
    it('Should format seconds into minutes:seconds', () => {
      for (let min = 0; min < 120; min++) {
        for (let sec = 0; sec < 60; sec++) {
          const seconds = min*60 + sec;
          formatTimer(seconds).should.equal(min + ':' + padLeft(sec))
        }
      }
    })
  })

  describe('getFormattedTime', () => {
    it('Should return formatted time based on the state', () => {
      getFormattedTime(_initState).should.equal('28:20')
    })
  })
})

