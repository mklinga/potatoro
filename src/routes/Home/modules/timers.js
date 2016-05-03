/* @flow */

import type { TimerType, Timer } from '../interfaces/timer'

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
        return (timer.type === action.payload.type) ? ({ ...timer, duration: action.payload.duration }) : timer
      })
    }
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: Array<Timer> = []
export default function reducer (state: Array<Timer> = initialState, action: Action): Array<Timer> {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

