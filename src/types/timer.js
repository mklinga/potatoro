/* @flow */

export type Issue = {
  msg: string,
  value: any
}

export type TimerType = 'WORK' | 'SHORT_PAUSE' | 'LONG_PAUSE'

export type Timer = {
  type: TimerType,
  duration: number,
  issues: Array<Issue>
}

export type State = {
  current: number,
  elapsed: number,
  running: boolean,
  timers: Array<Timer>,
  sequence: Array<TimerType>
}
