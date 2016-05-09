/* @flow */

import type { TimerType } from 'types/timer'
import init from '../../../init'

export const CHANGE_SEQUENCE = 'CHANGE_SEQUENCE'

export const ALLOWED_SEQUENCES = {
  '1': [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ],
  '2': [ 'WORK', 'SHORT_PAUSE', 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ]
}

export function changeSequence (amountOfshortBreaks: number): Action {
  return {
    type: CHANGE_SEQUENCE,
    payload: {
      amountOfshortBreaks
    }
  }
}

const ACTION_HANDLERS = {
  [CHANGE_SEQUENCE]:
    (state: Array<TimerType>, action: { payload: { amountOfshortBreaks: number } }): Array<TimerType> => {
      return ALLOWED_SEQUENCES[action.payload.amountOfshortBreaks] || state
    }
}

export default function reducer (state: Array<TimerType> = init.sequence, action: Action): Array<TimerType> {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

