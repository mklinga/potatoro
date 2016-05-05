/* @flow */

export const MODIFY_TIMER = 'MODIFY_TIMER'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'

export function modifyTimer (): Action {
  return {
    type: MODIFY_TIMER,
    payload: 1
  }
}

export function startTimer (): (dispatch: Function, getState: Function) => number {
  return (dispatch, getState) => {
    return window.setInterval(() => {
      if (getState().running) {
        dispatch(modifyTimer())
      }
    }, 1000)
  }
}

export function stopTimer (timerId: number): () => void {
  return () => window.clearInterval(timerId)
}

const ACTION_HANDLERS = {
  [MODIFY_TIMER]: (state: number, action: { payload: number }): number => state + action.payload,
  [STOP_TIMER]: (state: number): number => state
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: number = 0
export default function reducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

