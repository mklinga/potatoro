/* @flow */
import init from '../../../init'

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

export default function reducer (state: boolean = init.running, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

