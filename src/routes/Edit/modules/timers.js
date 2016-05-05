/* @flow */

import type { Issue, TimerType, Timer } from '../interfaces/timer'
import constants from '../constants'
import init from '../../../init.js'

// ------------------------------------
// Validation
// ------------------------------------

type DurationAndIssuesFunction = (duration: string) => { duration?: number, issues: Array<Issue> }

export const durationOrIssues: DurationAndIssuesFunction = (duration) => {
  const hasIssues = (Number.isNaN(+duration) || +duration < constants.timer.min || +duration > constants.timer.max)

  return hasIssues
    ? { issues: [{ msg: 'Invalid duration', value: duration }] }
    : { duration: Number(duration), issues: [] }
}

// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_DURATION = 'CHANGE_DURATION'

// ------------------------------------
// Actions
// ------------------------------------

export function changeDuration (type: TimerType, duration: string): Action {
  return {
    type: CHANGE_DURATION,
    payload: {
      type,
      duration
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [CHANGE_DURATION]:
    (state: Array<Timer>, action: { payload: { type: TimerType, duration: string } }): Array<Timer> => {
      return state.map(timer => {
        return (timer.type === action.payload.type)
          ? ({ ...timer, ...durationOrIssues(action.payload.duration) })
          : timer
      })
    }
}

// ------------------------------------
// Reducers
// ------------------------------------

export default function reducer (state: Array<Timer> = init.timers, action: Action): Array<Timer> {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
