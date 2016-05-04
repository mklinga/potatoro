/* @flow */

// ------------------------------------
// Constants
// ------------------------------------
export const LAUNCH_POTATORO = 'LAUNCH_POTATORO'

// ------------------------------------
// Actions
// ------------------------------------

export function launch (): Action {
  return {
    type: LAUNCH_POTATORO
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LAUNCH_POTATORO]: (state: boolean): boolean => true
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: boolean = false
export default function reducer (state: boolean = initialState, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

