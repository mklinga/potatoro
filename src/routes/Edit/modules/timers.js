/* @flow */

import type { Issue, TimerType, Timer } from 'types/timer'
import { TIMER } from 'utils/constants'
import init from '../../../init.js'

import { makeReducer } from 'utils/reducer'

export const CHANGE_DURATION = 'CHANGE_DURATION'

export function changeDuration (type: TimerType, duration: string): Action {
  return {
    type: CHANGE_DURATION,
    payload: {
      type,
      duration
    }
  }
}

export const durationOrIssues: (duration: string) => { duration?: number, issues: Array<Issue> } =
(duration) => {
  const hasIssues = (Number.isNaN(+duration) || +duration < TIMER.min || +duration > TIMER.max)

  return hasIssues
    ? { issues: [{ msg: 'Invalid duration', value: duration }] }
    : { duration: Number(duration), issues: [] }
}

export default makeReducer(init.timers, {
  [CHANGE_DURATION]:
    (state: Array<Timer>, action: { payload: { type: TimerType, duration: string } }): Array<Timer> => {
      return state.map(timer => {
        return (timer.type === action.payload.type)
          ? ({ ...timer, ...durationOrIssues(action.payload.duration) })
          : timer
      })
    }
})
