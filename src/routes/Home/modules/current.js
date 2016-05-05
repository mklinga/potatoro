/* @flow */
import init from '../../../init'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CURRENT_TIMER = 'SET_CURRENT_TIMER'

// ------------------------------------
// Actions
// ------------------------------------

export function setCurrent (index: number): Action {
  return {
    type: SET_CURRENT_TIMER,
    payload: index
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SET_CURRENT_TIMER]: (state: number, action: { payload: number }): number => action.payload
}

// ------------------------------------
// Reducers
// ------------------------------------

export default function reducer (state: number = init.current, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

