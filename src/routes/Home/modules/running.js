/* @flow */

// ------------------------------------
// Constants
// ------------------------------------
export const LAUNCH_POTATORO = 'LAUNCH_POTATORO'
export const STOP_POTATORO = 'STOP_POTATORO'

// ------------------------------------
// Actions
// ------------------------------------

export function launch (): Action {
  return {
    type: LAUNCH_POTATORO
  }
}

export function stop (): Action {
  return {
    type: STOP_POTATORO
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LAUNCH_POTATORO]: (state: boolean): boolean => true,
  [STOP_POTATORO]: (state: boolean): boolean => false
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: boolean = false
export default function reducer (state: boolean = initialState, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

