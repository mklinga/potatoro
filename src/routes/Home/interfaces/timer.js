/* @flow */

export type TimerType = 'WORK' | 'SHORT_PAUSE' | 'LONG_PAUSE'

export type Timer = {
  type: TimerType,
  duration: number
}

