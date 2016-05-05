/* @flow */
import { setCurrent } from './current'
import { stop } from './running'

export const MODIFY_TIMER = 'MODIFY_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'

const _tick = (dispatch, getState) => {
  return window.setInterval(() => {
    const state = getState()
    if (state.running) {
      dispatch(modifyTimer())
    }

    const currentTimer = state.timers.find(timer => timer.type === state.sequence[state.current])

    if (currentTimer && (state.elapsed >= (currentTimer.duration * 60))) {
      dispatch(stop())
      dispatch(resetTimer())
      dispatch(setCurrent((state.current + 1) % state.sequence.length))
    }
  }, 1000)
}

export function resetTimer (value: number = 0): Action {
  return {
    type: RESET_TIMER,
    payload: value
  }
}

export function startTimer (): (dispatch: Function, getState: Function) => number {
  return _tick
}

export function modifyTimer (): Action {
  return {
    type: MODIFY_TIMER,
    payload: 1
  }
}

export function stopTimer (timerId: number): () => void {
  return () => window.clearInterval(timerId)
}

const ACTION_HANDLERS = {
  [MODIFY_TIMER]: (state: number, action: { payload: number }): number => state + action.payload,
  [RESET_TIMER]: (state: number, action: { payload: number }): number => action.payload
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: number = 0
export default function reducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

