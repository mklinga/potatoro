/* @flow */

import type { TimerType } from '../interfaces/timer'
import init from '../../../init'

// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_SEQUENCE = 'CHANGE_SEQUENCE'

export const ALLOWED_SEQUENCES = {
  '1': [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ],
  '2': [ 'WORK', 'SHORT_PAUSE', 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
}

// ------------------------------------
// Actions
// ------------------------------------

export function changeSequence (amountOfshortBreaks: number): Action {
  return {
    type: CHANGE_SEQUENCE,
    payload: {
      amountOfshortBreaks
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [CHANGE_SEQUENCE]:
    (state: Array<TimerType>, action: { payload: { amountOfshortBreaks: number } }): Array<TimerType> => {
      return ALLOWED_SEQUENCES[action.payload.amountOfshortBreaks] || state
    }
}

// ------------------------------------
// Reducers
// ------------------------------------

export default function reducer (state: Array<TimerType> = init.sequence, action: Action): Array<TimerType> {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

