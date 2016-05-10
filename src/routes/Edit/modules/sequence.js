/* @flow */

import type { TimerType } from 'types/timer'
import init from '../../../init'

import { makeReducer } from 'utils/reducer'

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

export default makeReducer(init.sequence, {
  [CHANGE_SEQUENCE]:
    (state: Array<TimerType>, action: { payload: { amountOfshortBreaks: number } }): Array<TimerType> => {
      return ALLOWED_SEQUENCES[action.payload.amountOfshortBreaks] || state
    }
})
