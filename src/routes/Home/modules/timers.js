/* @flow */

import type { Issue, TimerType, Timer } from '../interfaces/timer'

// ------------------------------------
// Validation
// ------------------------------------

const checkIssues: (duration: number) => Array<Issue> = (duration) => {
  const hasIssues = (Number.isNaN(duration) || duration < 1 || duration > 180)

  return hasIssues ? [{ msg: 'Invalid duration' }] : []
}

// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_DURATION = 'CHANGE_DURATION'

// ------------------------------------
// Actions
// ------------------------------------

export function changeDuration (type: TimerType, duration: number): Action {
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
    (state: Array<Timer>, action: { payload: { type: TimerType, duration: number } }): Array<Timer> => {
      return state.map(timer => {
        return (timer.type === action.payload.type)
          ? ({ ...timer, duration: action.payload.duration, issues: checkIssues(action.payload.duration) })
          : timer
      })
    }
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: Array<Timer> = [
  { type: 'WORK', duration: 30, issues: [] },
  { type: 'SHORT_PAUSE', duration: 5, issues: [] },
  { type: 'LONG_PAUSE', duration: 15, issues: [] }
]

export default function reducer (state: Array<Timer> = initialState, action: Action): Array<Timer> {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

