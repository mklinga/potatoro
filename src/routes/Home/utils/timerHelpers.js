/* @flow */
import type { TimerType } from 'types/timer'

export const getNextTimer = (current: number, sequence: Array<TimerType>): number => {
  return (current + 1) % sequence.length
}

