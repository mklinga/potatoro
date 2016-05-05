export default ({
  current: 0,
  elapsed: 0,
  running: false,
  timers: [
    { type: 'WORK', duration: 30, issues: [] },
    { type: 'SHORT_PAUSE', duration: 5, issues: [] },
    { type: 'LONG_PAUSE', duration: 15, issues: [] }
  ],
  sequence: [ 'WORK', 'SHORT_PAUSE', 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
})
